import Image from "next/image";
import arduino from "@/public/images/arduino.png";
import logo from "@/public/images/logo.png";
import WorflowImg01 from "@/public/images/workflow-01.png";
import Spotlight from "@/components/spotlight";
import BOM from "@/public/images/BOM.jpg";

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
                  支持主流平台
                </span>
              </div>
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl text-transparent md:text-4xl">
              完成端到端的电子设计
              </h2>
              <p className="text-lg text-indigo-200/65">
              Simul 可以自动完成 Arduino、树莓派、ESP32平台的项目，为您节省开发和调试的时间。您不需要成为专家，即可专注于项目最核心的创意和功能。
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
                        src={arduino}
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
                            支持平台
                          </span>
                        </span>
                      </div>
                      <p className="text-indigo-200/65">
                        Simul 支持 Arduino、树莓派、ESP32 等主流平台，自动生成代码和电路设计，简化开发流程。
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
                            电路设计
                          </span>
                        </span>
                      </div>
                      <p className="text-indigo-200/65">
                        通过仿真工具，Simul 可以确保生成的电路设计在实际应用中的可靠性和稳定性，减少调试时间。
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
                  工具整合
                </span>
              </div>
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl text-transparent md:text-4xl">
              高效、便捷的工作流程
              </h2>
              <p className="text-lg text-indigo-200/65">
              Simul可以交付完整的嵌入式项目，包括微控制器程序和电路设计，减少您在不同工具之间的切换、调试带来的阻力。SImul内置了模拟仿真工具，允许AI使用模拟工具并确保交付高质量的设计。
              </p>
            </div>
          </div>

          {/* Third section */}
          <div className="mt-20 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            {/* Section header */}
            <div className="lg:max-w-[480px]">
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
                <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                  工具兼容
                </span>
              </div>
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl text-transparent md:text-4xl">
              与开发环境无缝衔接
              </h2>
              <p className="text-lg text-indigo-200/65">
              Simul 与 KiCad、嘉立创 EDA、Visual Studio Code 等工具集成，支持多种格式的电路图和 PCB 布局文件。您可以轻松地将 Simul 生成的设计导入到您熟悉的开发环境中，轻松集成到您现有的工作流。
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
                        src={logo}
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
                            格式兼容
                          </span>
                        </span>
                      </div>
                      <p className="text-indigo-200/65">
                        Simul 可以输出与 KiCad、嘉立创 EDA 等工具兼容的设计文件，快速进行后续的开发和调试工作。
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
                        src={BOM}
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
                          物料清单管理
                          </span>
                        </span>
                      </div>
                      <p className="text-indigo-200/65">
                        Simul 可以根据电路设计自动生成详细的元器件清单，简化管理工作。
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
                  BOM
                </span>
              </div>
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl text-transparent md:text-4xl">
              自动管理项目需求
              </h2>
              <p className="text-lg text-indigo-200/65">
              Simul 可以协助管理您的产品物料清单，帮助您准确识别物料需求，精准匹配器件型号，智能识别参数、替代、停产风险，计算成本。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}