import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* First section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            {/* Section header */}
            <div className="lg:max-w-[480px]">
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
                <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                  Tailored Workflows
                </span>
              </div>
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              便捷，高效
              </h2>
              <p className="text-lg text-indigo-200/65">
              Simul可以交付完整的嵌入式项目，包括程序和电路设计，减少您在不同工具之间的切换、调试带来的阻力。SImul内置了MCU模拟器和SPICE仿真工具，允许AI使用模拟工具并确保交付高质量的设计。 不需要将时间浪费在繁琐的底层细节中，您可以专注于项目最核心的创意和功能
              </p>
            </div>

            {/* Spotlight items */}
            <div className="mt-8 lg:mt-0 lg:max-w-[580px]" data-aos="fade-up">
              <Spotlight className="group">
                {/* Card */}
                <div className="group/card relative block h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                  <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                    {/* Image */}
                    <div className="relative h-[288px] w-full">
                      <Image
                        className="object-cover"
                        src={WorflowImg01}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="Workflow 01"
                        priority
                      />
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                          <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                            Built-in Tools
                          </span>
                        </span>
                      </div>
                      <p className="text-indigo-200/65">
                        Streamline the product development flow with a content
                        platform that's aligned across specs and insights.
                      </p>
                    </div>
                  </div>
                </div>
              </Spotlight>
            </div>
          </div>

          {/* Second section (mirrored) */}
          <div className="mt-20 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            {/* Spotlight items */}
            <div className="mt-8 lg:mt-0 lg:max-w-[580px]" data-aos="fade-up">
              <Spotlight className="group">
                {/* Card */}
                <div className="group/card relative block h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                  <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                    {/* Image */}
                    <div className="relative h-[288px] w-full">
                      <Image
                        className="object-cover"
                        src={WorflowImg01}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="Workflow 01"
                        priority
                      />
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                          <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                            Built-in Tools
                          </span>
                        </span>
                      </div>
                      <p className="text-indigo-200/65">
                        Streamline the product development flow with a content
                        platform that's aligned across specs and insights.
                      </p>
                    </div>
                  </div>
                </div>
              </Spotlight>
            </div>

            {/* Section header */}
            <div className="lg:max-w-[480px]">
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
                <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                  Tailored Workflows
                </span>
              </div>
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              免费，开源
              </h2>
              <p className="text-lg text-indigo-200/65">
              Simul是免费的开源软件，支持主流的闭源/开源大模型，可以在云计算、本地部署之间自由选择。同时允许二次开发，为不同需求深度定制专属的AI代理
              </p>
            </div>
          </div>

          {/* Third section */}
          <div className="mt-20 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            {/* Section header */}
            <div className="lg:max-w-[480px]">
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
                <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                  Tailored Workflows
                </span>
              </div>
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              与开发环境无缝衔接
              </h2>
              <p className="text-lg text-indigo-200/65">
              与Fritzing、SimulIDE等开源工具集成，轻松集成到现有的工作流。与Arduino框架集成，简化开发。连接BoM清单，自动选择合适的上游供应商
              </p>
            </div>

            {/* Spotlight items */}
            <div className="mt-8 lg:mt-0 lg:max-w-[580px]" data-aos="fade-up">
              <Spotlight className="group">
                {/* Card */}
                <div className="group/card relative block h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
                  <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                    {/* Image */}
                    <div className="relative h-[288px] w-full">
                      <Image
                        className="object-cover"
                        src={WorflowImg01}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="Workflow 01"
                        priority
                      />
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                          <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                            Built-in Tools
                          </span>
                        </span>
                      </div>
                      <p className="text-indigo-200/65">
                        Streamline the product development flow with a content
                        platform that's aligned across specs and insights.
                      </p>
                    </div>
                  </div>
                </div>
              </Spotlight>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}