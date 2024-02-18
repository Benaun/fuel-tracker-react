import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="font-main flex justify-center w-full bg-[#362D6C]">
            <section className="flex w-full p-4 justify-between items-center">
                <div className="w-[30px] h-[30px]">
                    <Image
                        width={0}
                        height={0}
                        src="/logo.png"
                        alt="Logo"
                        sizes="100vw"
                        className=" w-full h-auto rounded-full"
                    />
                </div>
                <Link href={"https://github.com/Benaun"} target="_blank">
                    <h3 className=" text-sm text-center md:text-base font-normal text-white">
                        &copy; 2024 Benaun | All Rights Reserved
                    </h3>
                </Link>
                <div className="flex gap-2 md:gap-5">
                    <Link href={"https://wa.me/11111111"} target="_blank">
                        <FaWhatsapp
                            size={23}
                            fill={"#fff"}
                            className="hover:fill-slate-500 ease-in duration-300 cursor-pointer"
                        />
                    </Link>
                    <Link href={"https://t.me/lesia555"} target="_blank">
                        <FaTelegramPlane
                            size={23}
                            fill={"#fff"}
                            className="hover:fill-slate-500 ease-in duration-300 cursor-pointer"
                        />
                    </Link>
                </div>
            </section>
        </footer>
    )
}