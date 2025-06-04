'use client';

import React from 'react';
import Spotlight from '@/components/spotlight';

export default function HeroHome() {
  const scrollToBottom = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-[100vh] flex items-center pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-4xl font-semibold text-transparent md:text-5xl leading-tight"
              data-aos="fade-up"
            >
              AI驱动的电子设计自动化工具
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Simul是一个 AI 原生 EDA 工具，通过自然语言输入自动生成完整的电子项目，包括电路和微控制器的源代码。Simul 可以加速您的工业原型验证、STEM 教育、科学研究、物联网开发等工作。
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center mt-16">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <Spotlight>
                    <a
                      className="group/card relative block overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
                      href="#"
                      onClick={scrollToBottom}
                    >
                      <div className="relative z-20 overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                        <span className="relative block px-12 py-6">
                          <span className="relative inline-flex items-center text-2xl">
                            <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                              加入抢先体验
                            </span>
                            <span className="ml-2 tracking-normal text-gray-500 transition-transform group-hover/card:translate-x-0.5">
                              →
                            </span>
                          </span>
                        </span>
                      </div>
                    </a>
                  </Spotlight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}