export default function Footer() {
  return (
    <footer className="material-acrylic border-t p-8 flex flex-col items-center gap-4">
      <nav className="flex gap-4">
        {SocialLink(
          "Github",
          "mdi--github",
          "https://github.com/bruno-glowaski",
        )}
        {SocialLink(
          "LinkedIn",
          "mdi--linkedin",
          "https://www.linkedin.com/in/bruno-glowaski",
        )}
      </nav>
      <span className="text-center">
        Made with Next.js, Tailwind CSS and TypeScript
      </span>
    </footer>
  );
}

function SocialLink(label: string, icon: string, link: string) {
  return (
    <a
      href={link}
      className="active:bg-highlight/50 hover:bg-highlight rounded-lg p-2 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={`iconify ${icon} w-8 h-8`}>{label}</span>
    </a>
  );
}
