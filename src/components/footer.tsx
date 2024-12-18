import { FaTelegramPlane } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <main className=" bg-black pb-2 fixed bottom-0 left-0 w-full">
        <hr className="border-[#D4AF37] " />
        <div className="flex justify-around items-center">
          <Image
            src="/assets/images/Ac2.jpg"
            width={150}
            height={150}
            alt="AurumCartel"
          />
          <div>
            <h2 className="text-center mb-6 text-xl">
              Ensemble pour atteindre nos objectifs
            </h2>
            <button className="w-full bg-transparent text-white border border-[#D4AF37] font-bold py-2 px-10 rounded-3xl hover:bg-[#D4AF37] hover:text-black transition">
              Contacter nous
            </button>
          </div>
          {/* Reseaux sociaux */}
          <div className="flex gap-4">
            <Link href={""}>
              <CiFacebook className="w-8 h-8" />
            </Link>
            <Link href={""}>
              <FiInstagram className="w-8 h-8" />
            </Link>
            <Link href={""}>
              <FaTelegramPlane className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
