#include <Adafruit_INA219.h>
#include <SSD1306AsciiAvrI2c.h>
#include <SdFat.h>

volatile boolean triggered = false;

#define OLED_RESET 4
SSD1306AsciiAvrI2c display;

Adafruit_INA219 ina219;
float current_mA = 0.0, oldcurr = 0.0;
float loadvoltage = 0.0, oldvolt = 0.0;
float power_mW = 0.0, oldpow = 0.0;
float energy_mWh = 0.0, oldegy = 0.0;
unsigned long elapsed = 0;


#define CHIPSELECT 10
#define ENABLE_DEDICATED_SPI 1
#define SD_CONFIG SdSpiConfig(SD_CS_PIN, DEDICATED_SPI, SPI_CLOCK)
#define SPI_DRIVER_SELECT 0
uint8_t cycles = 0;
SdFat32 sd;
File32 measurFile;

void setup() {

  ADCSRA = 0;
  ACSR = 0x80;

  ina219.begin();

  sd.begin(CHIPSELECT);
  measurFile.open("MEAS.csv", O_WRITE | O_CREAT | O_TRUNC);
  measurFile.print("Time,Voltage,Current\n");
  measurFile.sync();

  display.begin(&Adafruit128x64, 0x3C, OLED_RESET);
  display.setFont(System5x7);
  display.clear();
  cli();

  TCCR1A = 0;
  TCCR1B = 0;
  TCNT1  = 0;
  OCR1A = 12499; 
  TCCR1B |= (1 << WGM12);
  TCCR1B |= (0 << CS12) | (1 << CS11) | (1 << CS10);
  TIMSK1 |= (1 << OCIE1A);

  sei();
}

void loop() {

  if (triggered)
  {
    
    ina219values();

    writeFile();
	
	if(loadvoltage != oldvolt){
		displayline(loadvoltage, 0, " V");
		oldvolt = loadvoltage;
	}
	
	if(current_mA != oldcurr){
		displayline(current_mA, 2, " mA");
		oldcurr = current_mA;
	}
	
	if(power_mW != oldpow){
		displayline(power_mW, 4, " mW");
		oldpow = power_mW;
	}
	
	if(energy_mWh != oldegy){
		displayline(energy_mWh, 6, " mWh");
		oldegy = energy_mWh;
	}
    //reset the flag
    triggered = false;
  }
}


ISR(TIMER1_COMPA_vect){
  triggered = true;
}

void displayline(const float measurment, const uint8_t line_num, const char line_end[]) {
  char floatbuf[16]={0};
  dtostrf(measurment, 10, 3, floatbuf);
  strcat(floatbuf, line_end);
  display.setCursor(0, line_num);
  display.print(floatbuf);
}


void ina219values() {
  float shuntvoltage = 0.0;
  float busvoltage = 0.0;
  ina219.powerSave(false);
  shuntvoltage = ina219.getShuntVoltage_mV();
  busvoltage = ina219.getBusVoltage_V();
  current_mA = ina219.getCurrent_mA();
  elapsed = millis();
  ina219.powerSave(true);
  loadvoltage = busvoltage + (shuntvoltage / 1000.0);
  //compute the power consumed
  power_mW
  energy_mWh += power_mW * ( elapsed / 3600000.0);
}

void writeFile() {
    char buf[32], voltbuf[16]={0}, curbuf[16]={0};
    dtostrf(loadvoltage, 10, 3, voltbuf);
    dtostrf(current_mA, 10, 3, curbuf);
    sprintf(buf, "%ld,%s,%s\n", elapsed, voltbuf, curbuf);
    measurFile.write(buf);
    if(cycles >=9)
      measurFile.sync();
    cycles++;
    cycles %= 10;
}