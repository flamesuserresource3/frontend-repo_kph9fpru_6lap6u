import { BookOpen, Puzzle, Volume2 } from 'lucide-react';

function Features() {
  const features = [
    {
      title: 'Immersive Storyline',
      icon: BookOpen,
      desc: 'Piece together a layered narrative told through environmental cues, fragmented memories, and shifting spaces.',
    },
    {
      title: 'Mind-Bending Puzzles',
      icon: Puzzle,
      desc: 'Subtle logic and perception challenges that reward observation over haste.',
    },
    {
      title: 'Dynamic Sound Design',
      icon: Volume2,
      desc: 'Reactive ambience and binaural cues that guide and unsettle in equal measure.',
    },
  ];

  return (
    <section id="features" className="relative bg-[linear-gradient(180deg,#0a0a0b,40%,#0b0b0c)] py-24 sm:py-32">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="reveal text-center text-2xl font-semibold tracking-wide text-zinc-100 sm:text-3xl">
          What Awaits Inside
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map(({ title, icon: Icon, desc }) => (
            <article
              key={title}
              className="reveal group rounded-xl border border-zinc-800/70 bg-zinc-900/40 p-6 backdrop-blur transition-transform duration-500 will-change-transform hover:-translate-y-1 hover:bg-zinc-900/60"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100/5 ring-1 ring-inset ring-zinc-50/10">
                <Icon className="h-6 w-6 text-zinc-200" />
              </div>
              <h3 className="text-lg font-medium text-zinc-100">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
