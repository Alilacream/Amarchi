import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/amarchi_logo.png"
        alt="AM Archi Vision"
        width={220}
        height={80}
        className="h-14 w-auto"
        priority
      />
    </Link>
  );
}
