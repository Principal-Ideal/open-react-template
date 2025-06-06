import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-2xl font-semibold text-transparent md:text-3xl"
              data-aos="fade-up"
            >
              加入抢先体验
            </h2>
            <form className="mx-auto max-w-md space-y-6">
              <div>
                <label
                  className="mb-2 block text-left text-base font-medium text-indigo-200/65"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full text-base"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-left text-base font-medium text-indigo-200/65"
                  htmlFor="feature"
                >
                  你最希望 Simul 实现哪些功能？
                </label>
                <textarea
                  id="feature"
                  className="form-textarea w-full text-base"
                  rows={4}
                  placeholder="Tell us about the features you need..."
                  required
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-3 text-base font-semibold text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                >
                  <span className="relative inline-flex items-center">
                    发送
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}