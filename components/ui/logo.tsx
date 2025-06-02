import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <div className="inline-flex shrink-0 items-center gap-4 pt-8">
      <Image src={logo} alt="Logo" width={64} height={64} />
      <span className="text-xl font-medium text-gray-200">AI-driven tool</span>
    </div>
  );
}