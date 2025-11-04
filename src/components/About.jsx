function About() {
  return (
    <section id="about" className="relative isolate bg-[linear-gradient(180deg,#0b0b0c,40%,#0a0a0b)] py-24 sm:py-32">
      {/* subtle noise texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(transparent_1px,#000_1px)] [background-size:4px_4px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-zinc-200">
        <h2 className="reveal text-2xl font-semibold tracking-wide text-zinc-100 sm:text-3xl">About the Game</h2>
        <p className="reveal mt-4 max-w-3xl text-zinc-400">
          Silent Echo is a slow-burning psychological thriller that unravels in a minimal, shadow-drenched world. You awaken within fragmented memories—rooms that shift, hallways that repeat, and whispers that respond to your curiosity.
        </p>
        <p className="reveal mt-4 max-w-3xl text-zinc-400">
          Explore at your own pace through a moody, cinematic atmosphere. Every step, sound, and flicker of light hints at a deeper story waiting beneath the surface. The world doesn’t chase you—it invites you to look closer.
        </p>
        <p className="reveal mt-4 max-w-3xl text-zinc-400">
          Designed for headphones, best played alone. If you listen closely, the echoes answer back.
        </p>
      </div>
    </section>
  );
}

export default About;
