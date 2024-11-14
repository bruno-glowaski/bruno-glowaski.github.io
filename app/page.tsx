import "./page.css";

export default function Home() {
  const navMenuStyle = { "--item-index": 0 } as React.CSSProperties;
  return (
    <>
      <aside className="z-10 fixed p-8 top-0 w-full flex justify-center">
        <nav
          className="material-acrylic rounded-2xl border flex backdrop-blur-xl shadow-lg overflow-clip with-nav-indicator"
          style={navMenuStyle}
        >
          {NavMenuLink("Home", "/")}
          {NavMenuLink(
            "Projects",
            "https://github.com/bruno-glowaski",
            "external",
          )}
          {NavMenuLink("Resumé", "/resume", "newtab")}
          {NavMenuLink(
            "About",
            "https://www.linkedin.com/in/bruno-glowaski",
            "external",
          )}
        </nav>
      </aside>
      <header className="w-full h-screen flex flex-col justify-center items-center drop-shadow-lg">
        <h1 className="text-5xl leading-normal tracking-[-0.3rem] font-extralight">
          Bruno Glowaski
        </h1>
        <span className="text-2xl font-bold">Software Engineer</span>
      </header>
      <main className="w-full h-screen p-16 flex justify-end items-center">
        <div className="max-w-[40em] material-acrylic border rounded-2xl p-8 flex flex-col gap-8 shadow-lg">
          <h2 className="text-4xl drop-shadow">About</h2>
          <p>
            Hello, my name is <em>Bruno Henrique Glowaski Morais</em> and I’m a
            passionate <strong>software engineer</strong>. Being a curious
            person, I dabble in a lot of fields, including, but not limited to,{" "}
            <em>
              computer graphics, operating systems, security, software
              development processes & software quality
            </em>
            . In my professional time, I can work with{" "}
            <strong>
              full-stack services, game frameworks and/or engines, low-level
              system components and mobile and/or desktop apps
            </strong>
            . During my professional career, I’ve worked in multiple kinds of
            teams, from basically alone to somewhat large multidisciplinary
            teams.
          </p>
          <a
            className="self-end rounded px-4 py-2 bg-accent font-bold uppercase tracking-normal flex gap-2 after:[content:'>'] shadow"
            href="https://www.linkedin.com/in/bruno-glowaski"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </div>
      </main>
      <section className="w-full h-screen p-16 flex flex-col justify-center items-start gap-8">
        <h2 className="text-4xl drop-shadow-lg">Buy me chocolate milk</h2>
        <ul className="max-w-[40em] flex flex-col gap-8">
          {DonationOption(
            "Bitcoin",
            "bc1qjgphzkvgmlr909x4xg06w0jq2drzj9ttcgr53laz4s8ykduxvp0qtf0kn3",
          )}
          {DonationOption("PIX", "9edee982-92e4-49bb-9927-643e68643d45")}
        </ul>
      </section>
      <footer className="material-acrylic border-t p-8 flex flex-col items-center gap-8">
        <nav className="flex gap-8">
          <a
            href="https://github.com/bruno-glowaski"
            className="iconify mdi--github w-8 h-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-glowaski"
            className="iconify mdi--linkedin w-8 h-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </nav>
        <span>Made with Next.js, Tailwind CSS and TypeScript</span>
      </footer>
    </>
  );
}

function NavMenuLink(
  content: string,
  href: string,
  type?: "external" | "newtab",
) {
  let props = {};
  if (type === "external") {
    props = { target: "_blank", rel: "noopener noreferrer" };
  }
  if (type === "newtab") {
    props = { target: "_blank" };
  }
  return (
    <a
      className="hover:bg-highlight w-28 py-4 flex justify-center font-bold uppercase tracking-normal transition"
      href={href}
      {...props}
    >
      {content}
    </a>
  );
}

function DonationOption(title: string, value: string) {
  return (
    <li className="material-acrylic rounded-2xl p-8 flex flex-col gap-3 shadow-lg">
      <h3 className="font-bold uppercase tracking-normal">{title}</h3>
      <span className="break-all">{value}</span>
    </li>
  );
}
