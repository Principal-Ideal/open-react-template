import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <div className="inline-flex shrink-0 pt-8">
      <Image src={logo} alt="Logo" width={32} height={32} />
    </div>
  );
}