import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <div className="inline-flex shrink-0 items-center gap-3 pt-8">
      <Image src={logo} alt="Logo" width={32} height={32} />
      <span className="text-sm font-medium text-gray-200">AI-driven tool</span>
    </div>
  );
}