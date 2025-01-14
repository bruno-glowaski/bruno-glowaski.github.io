"use client";

import "animate.css";
import { FadeLeft, FadeRight } from "@/components/utils/animate-on-scroll";

export default function Home() {
  return (
    <>
      <header className="w-full min-h-lscreen flex flex-col justify-center items-center drop-shadow-lg">
        <h1 className="text-5xl leading-normal tracking-[-0.3rem] font-extralight">
          Bruno Glowaski
        </h1>
        <span className="text-2xl font-bold">Software Engineer</span>
      </header>
      <FadeRight
        render={(ref, className) => (
          <main
            ref={ref}
            className="w-full min-h-2lscreen sm:min-h-lscreen p-4 sm:p-16 flex justify-end items-center overflow-x-hidden"
          >
            <div
              className={`max-w-[40em] material-acrylic acrylic-border rounded-2xl p-8 flex flex-col gap-8 shadow-lg${className}`}
            >
              <h2 className="text-4xl drop-shadow">About</h2>
              <p className="prose prose-dark">
                Hello, my name is <em>Bruno Henrique Glowaski Morais</em> and
                I’m a passionate <strong>software engineer</strong>. Being a
                curious person, I dabble in a lot of fields, including, but not
                limited to,{" "}
                <em>
                  computer graphics, operating systems, security, software
                  development processes & software quality
                </em>
                . In my professional time, I can work with{" "}
                <strong>
                  full-stack services, game frameworks and/or engines, low-level
                  system components and mobile and/or desktop apps
                </strong>
                . During my professional career, I’ve worked in multiple kinds
                of teams, from basically alone to somewhat large
                multidisciplinary teams.
              </p>
              <a
                className="relative sm:self-end rounded px-4 py-2 bg-accent hover:brightness-110 active:brightness-125 font-bold uppercase tracking-normal flex gap-2 justify-center after:iconify after:mdi--chevron-right after:w-6 after:h-6 shadow transition"
                href="https://www.linkedin.com/in/bruno-glowaski"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </div>
          </main>
        )}
      />
      <FadeLeft
        render={(ref, className) => (
          <section
            ref={ref}
            className="w-full min-h-lscreen p-4 sm:p-16 flex flex-col justify-center items-start gap-8 overflow-x-hidden"
          >
            <h2 className={`text-4xl drop-shadow-lg${className}`}>
              Buy me chocolate milk
            </h2>
            <ul className="max-w-[40em] flex flex-col gap-8">
              {DonationOption(
                "Bitcoin",
                "bc1qjgphzkvgmlr909x4xg06w0jq2drzj9ttcgr53laz4s8ykduxvp0qtf0kn3",
                `${className} animate__delay-250ms`,
              )}
              {DonationOption(
                "PIX",
                "9edee982-92e4-49bb-9927-643e68643d45",
                `${className} animate__delay-500ms`,
              )}
            </ul>
          </section>
        )}
      />
    </>
  );
}

function DonationOption(title: string, value: string, className: string) {
  return (
    <li
      className={`material-acrylic acrylic-border rounded-2xl p-8 flex flex-col gap-3 shadow-lg${className}`}
    >
      <h3 className="font-bold uppercase tracking-normal">{title}</h3>
      <span className="break-all">{value}</span>
    </li>
  );
}
