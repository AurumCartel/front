import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <main className="fixed w-full top-0 left-0 flex justify-around items-center bg-black">
        <div>
          <Image
            src="/assets/images/Ac2.jpg"
            width={120}
            height={120}
            alt="AurumCartel"
          />
        </div>
        <div className="flex gap-32">
          <Link href={"#"}>Acceuil</Link>
          <Link href={"#"}>Cours</Link>
          <Link href={"#"}>Messagerie</Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 bg-green-500 rounded-full"></span>
          <span className="font-semibold">Sandro Lu</span>
          <Image
            className="border rounded-full"
            src="/assets/images/Ac2.jpg"
            width={50}
            height={50}
            alt="AurumCartel"
          />
        </div>
      </main>
    </>
  );
}
