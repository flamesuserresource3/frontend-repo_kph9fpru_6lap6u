import { Twitter, Youtube, Gamepad2 } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative border-t border-zinc-800/60 bg-[linear-gradient(180deg,#09090b,#0a0a0b)] py-10 text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-100/5 ring-1 ring-inset ring-zinc-50/10">
            <Gamepad2 className="h-5 w-5 text-zinc-200" />
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-200">Silent Echo</p>
            <p className="text-xs text-zinc-500">© 2025 Silent Echo</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Twitter"
            className="rounded-md p-2 text-zinc-400 transition-colors hover:text-zinc-200"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="rounded-md p-2 text-zinc-400 transition-colors hover:text-zinc-200"
          >
            <Youtube className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
