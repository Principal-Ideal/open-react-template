import Image from "next/image";

export default function Logo() {
  return (
    <div className="inline-flex shrink-0 items-center gap-3 pt-8">
      <Image 
        src="/images/ChatGPT_Image_2025年6月3日_17_09_02-removebg-preview.png" 
        alt="Logo" 
        width={48} 
        height={48} 
      />
      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-xl font-medium text-transparent">Simul</span>
    </div>
  );
}