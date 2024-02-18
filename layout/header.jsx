import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center bg-[#F1EBF5]">
      <section className="flex w-full p-4 justify-between items-center">
        <div className="w-[30px] h:[30px]">
          <Image
            width={0}
            height={0}
            src="/logo.png"
            alt="Logo"
            sizes="100vw"
            className=" w-full h-auto rounded-full"
          />
        </div>
        <h2 className="text-2xl font-semibold">
          Fuel Tracker
        </h2>
        <div className="flex gap-2">
          <Link href={"https://wa.me/111111"} target="_blank">
            <FaWhatsapp
              size={25}
              fill={"#910208"}
              className="hover:fill-rose-500 ease-in duration-300 cursor-pointer"
            />
          </Link>
          <Link href={"https://t.me/lesia555"} target="_blank">
            <FaTelegramPlane
              size={25}
              fill={"#910208"}
              className="hover:fill-rose-500 ease-in duration-300 cursor-pointer"
            />
          </Link>
        </div>
      </section>
    </header>
  )
}