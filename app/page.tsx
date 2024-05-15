import Image from "next/image";
import Nabvar from "../components/Navbar";
import Landing from "./landing/page";
export default function Home() {
  return (
    <main className=" items-center justify-between h-screen-max bg-gradient-to-r from-slate-400 to-slate-300 h-20">
      <Landing />
    </main>
  );
}
