import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <Image
          src="/logo.png"
          width={40}
          height={40}
          className="mx-auto"
          alt={"logo"}
        />
        <Link href="/">
          <h1>Jack's Blog</h1>
        </Link>
        <p>🤟 Welcome to my tech blog. 💻</p>
      </div>
    </header>
  );
  const nav = (
    <nav>      
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <Link href="/">
        <h1>Abaut</h1>
      </Link>
      <Link href="/">
        <h1>Contact</h1>
      </Link>
      <Link href="/">
        <h1>Youtube</h1>
      </Link>
    </nav>
  );
  const aside = (
    <aside>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>ASIDE BOX</h3>
      </div>
    </aside>
  );
  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Ronsof.it</h3>
        <h3>Ronsof.it</h3>
        <h3>Ronsof.it</h3>
        <h3>Ronsof.it</h3>
        <h3>Ronsof.it</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div id="container">
          {header}
          {nav}
          {children}
          {aside}
          {footer}
        </div>
      </body>
    </html>
  );
}
