import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
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
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-12 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Join the waiting list for early access
            </h2>
            <form className="mx-auto max-w-md space-y-6">
              <div>
                <label
                  className="mb-2 block text-left text-lg font-medium text-gray-400"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full rounded-xl bg-gray-900/50 px-4 py-3 text-lg"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-left text-lg font-medium text-gray-400"
                  htmlFor="feature"
                >
                  What feature do you need for this tool?
                </label>
                <textarea
                  id="feature"
                  className="form-textarea w-full rounded-xl bg-gray-900/50 px-4 py-3 text-lg"
                  rows={4}
                  placeholder="Tell us about the features you need..."
                  required
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="btn group w-full rounded-xl bg-indigo-500 px-6 py-4 text-lg font-medium text-white hover:bg-indigo-600"
                >
                  <span className="relative inline-flex items-center">
                    Send
                    <span className="ml-2 text-xl transition-transform group-hover:translate-x-0.5">
                      →
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