import { ReactElement } from "react";

export default function Me() {
  return (
    <article>
      <h1 className="h-lscreen flex items-center justify-center text-5xl">
        About me
      </h1>
      <section className="p-4 flex flex-col gap-4">
        <h2 className="text-5xl">TL;DR</h2>
        {TldrCard("Main fields I work on", [
          "Software Engineering",
          "Web Development",
          "Operating Systems",
          "Security",
          "UI & UX Design",
        ])}
        {TldrCard("Languages I write in", [
          "Rust",
          "C#",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS",
          "C",
          "C++",
          "Python",
          "Ruby",
          "Lua",
          "Java",
        ])}
        {TldrCard("Web frameworks I develop with", [
          "React",
          "Vue 2/3",
          "ASP.NET Core",
          "Ruby on Rails",
          "Express.JS",
          "Node.JS",
          "Next.JS",
          "Vite",
        ])}
        {TldrCard("Game frameworks & engines I create with", [
          "Vulkan",
          "WebGL",
          "SDL2",
          "Godot",
          "Unity",
        ])}
        {TldrCard("Misc. tooling I use", [
          "Jest",
          "Git",
          "GitHu Actions",
          "AWS",
          "Azure",
          "Docker",
        ])}
      </section>
      <section className="px-4 py-64 prose prose-dark">
        <h2 className="mb-8 text-4xl text-center not-prose">Introduction</h2>
        <p>
          My full name is <strong>Bruno Henrique Glowaski Morais</strong> and I
          work as a <strong>software engineer</strong>. Versatile and capable of
          working on multiple fields, I have a preference for working on{" "}
          <em>web services</em>,<em>games</em>, <em>graphic engines</em>,{" "}
          <em>desktop apps</em>, <em>low-level software</em>. I constantly
          strive to learn about new topics and technologies, specially those
          related to computer science.
        </p>
        <p>
          My journey into software development started when I was around 12
          years old, when, motivated by curiosity about computer systems, I
          started tinkering with VB.NET Winforms apps and Game Maker 8.
          Eventually, I moved to C#, learning XNA, MonoGame and WPF.
        </p>
        <p>
          Nowadays, I continue to read and learn about different topics, with
          more preference for those related to low-level programming (which
          includes OS and embedded devices), software development processes,
          security & malware analysis, game design & development, computer
          graphics, web framework news and analytical math.
        </p>
        <p>
          I mostly develop applications using Rust, C#, TypeScript, C++ and pure
          C. When developing games and graphics applications, I either use Godot
          or write an engine from scratch, using frameworks like MonoGame, SDL2
          or GLFW. I’m well familiar with RESTful APIs, and a bit with GraphQL.
          On the frontend side, I like writing applications in Vue 3 and Svelte
          mostly, but I also have a lot of experience with functional React.
          That being said, never presume I don’t know a technology if I haven’t
          mentioned it. I either already know it, or I’m going to learn about it
          in three days.
        </p>
        <p>On my free time, I’ll be either:</p>
        <ul>
          <li>coding;</li>
          <li>learning;</li>
          <li>drawing;</li>
          <li>
            gaming (I like sandbox games, such as Minecraft and Factorio, and
            old-school classics, like Super Metroid);
          </li>
          <li>modding said games.</li>
        </ul>
      </section>
      <section className="flex flex-col">
        <h2 className="h-lscreen flex items-center justify-center text-4xl">
          Academic Journey
        </h2>
        <ol className="px-4 py-16 flex flex-col gap-16">
          <li>
            {AcademicCourse(
              "Computer Science",
              "Barchelor's Degree",
              "UFMS",
              ["2018", "2023"],
              <>
                <p>Deepened my knowledge about:</p>
                <ul>
                  <li>Operating Systems;</li>
                  <li>File Systems;</li>
                  <li>Multi-threading;</li>
                  <li>Security & Protection;</li>
                  <li>Data Structures;</li>
                  <li>Algorithms;</li>
                  <li>Software Engineering;</li>
                  <li>Software Quality;</li>
                  <li>Development Processes;</li>
                  <li>Project Management;</li>
                  <li>Human-Computer Interfaces;</li>
                  <li>Computer Graphics;</li>
                  <li>WebGL;</li>
                  <li>Vulkan;</li>
                </ul>
                <p>I also learned the following languages:</p>
                <ul>
                  <li>C;</li>
                  <li>C++;</li>
                  <li>Python;</li>
                  <li>JavaScript;</li>
                  <li>Rust;</li>
                </ul>
              </>,
            )}
          </li>
          <li>
            {AcademicCourse(
              "Computer Science",
              "Master's Degree",
              "UFMS",
              ["2023", "present"],
              <>
                <p>Learned more about:</p>
                <ul>
                  <li>Operating Systems;</li>
                  <li>Algorithms;</li>
                  <li>Software Engineering;</li>
                </ul>
                <p>
                  Currently, I’m researching latency and throughput
                  optimizations for hypercalls.
                </p>
              </>,
            )}
          </li>
        </ol>
      </section>
      <section className="flex flex-col">
        <h2 className="h-lscreen flex items-center justify-center text-4xl">
          Professional Career
        </h2>
        <ol className="px-4 py-16 flex flex-col gap-16">
          <li>
            {Role(
              "Full-stack Developer Intern",
              "JN Sistemas",
              ["June 2021", "August 2021"],
              <ul>
                <li>
                  Developed and maintained multiple C# and ASP.NET Core
                  microservices;
                </li>
                <li>
                  Cleaned legacy, poorly written (and I mean it!) codebases;
                </li>
                <li>
                  Implemented binary protocols despite badly translated and
                  inconsistent documentation;
                </li>
                <li>Set up automated testing infrastructure;</li>
                <li>Wrote and kept up-to-date documentation;</li>
                <li>
                  <em>
                    Considered a full developer, despite no prior work
                    experience.
                  </em>
                </li>
              </ul>,
            )}
          </li>
          <li>
            {Role(
              "MERN Stacker",
              "ThoughtMediaWorks",
              ["June 2021", "August 2021"],
              <ul>
                <li>
                  Developed many MongoDB, Express.JS, React and Next.JS based
                  web services;
                </li>
                <li>Learned and applied various technologies and tools;</li>
                <li>
                  Maintained, managed and automated web service deployments;
                </li>
                <li>
                  <em>
                    Diligently delivered user stories despite tight schedules.
                  </em>
                </li>
              </ul>,
            )}
          </li>
          <li>
            {Role(
              "Web Developer",
              "Jera",
              ["June 2021", "August 2021"],
              <ul>
                <li>
                  Developed many web services, mostly on Ruby on Rails and Vue
                  3;
                </li>
                <li>
                  Collaborated with multidisciplinary teams to refine
                  requirements and designs;
                </li>
                <li>Delivered accurate date estimates;</li>
                <li>
                  Maintained open and friendly communications with clients;
                </li>
                <li>
                  Reviewed and maintained my and other teams’ code, ensuring
                  clean code and good testing practices;
                </li>
                <li>
                  Always open to provide help and assistance on difficult tasks
                  to all collaborators;
                </li>
                <li>
                  <em>
                    All apps my teams have developed were rated 4/5 or above by
                    clients.
                  </em>
                </li>
              </ul>,
            )}
          </li>
        </ol>
      </section>
    </article>
  );
}

function TldrCard(title: string, items: string[]) {
  return (
    <section className="shadow-lg rounded-lg material-acrylic acrylic-border p-4 flex flex-col gap-4 max-w-[unset] prose prose-dark">
      <h3 className="text-xl leading-tight font-bold not-prose">{title}</h3>
      <ul>
        {items.map((content, index) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </section>
  );
}

function AcademicCourse(
  subject: string,
  degree: string,
  university: string,
  date: [string, string],
  description: ReactElement,
) {
  return (
    <section className="shadow-lg rounded-lg material-acrylic acrylic-border p-4 flex flex-col gap-4">
      <header className="contents">
        <span className="text-xl leading-tight text-bold">{subject}</span>
        <h3 className="text-4xl font-medium">{degree}</h3>
        <span className="text-sm">
          {university}
          <wbr /> ({date[0]} - {date[1]})
        </span>
      </header>
      <main className="prose prose-dark">{description}</main>
    </section>
  );
}

function Role(
  title: string,
  company: string,
  date: [string, string],
  description: ReactElement,
) {
  return (
    <section className="shadow-lg rounded-lg material-acrylic acrylic-border p-4 flex flex-col gap-4">
      <header className="contents">
        <h3 className="text-4xl font-medium">{title}</h3>
        <span className="text-sm">
          {company}
          <wbr /> ({date[0]} - {date[1]})
        </span>
      </header>
      <main className="prose prose-dark">{description}</main>
    </section>
  );
}
