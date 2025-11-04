import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/fvh1rcczCU4MCcKH/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* cinematic gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-6 text-center text-zinc-100">
        <p className="tracking-[0.3em] text-xs sm:text-sm text-zinc-300/80 reveal">PSYCHOLOGICAL GAME</p>
        <h1 className="reveal mt-4 bg-gradient-to-b from-zinc-50 via-zinc-200 to-zinc-400 bg-clip-text text-5xl font-semibold text-transparent sm:text-6xl md:text-7xl">
          Silent Echo
        </h1>
        <p className="reveal mx-auto mt-5 max-w-2xl text-zinc-300/90 text-base sm:text-lg">
          A Psychological Journey Through the Shadows of Memory.
        </p>
        <div className="reveal mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#gallery"
            className="rounded-full bg-zinc-100/10 px-6 py-3 text-sm font-medium text-zinc-100 backdrop-blur transition-all duration-500 hover:-translate-y-0.5 hover:bg-zinc-100/15 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
          >
            Play Trailer
          </a>
          <a
            href="#features"
            className="rounded-full border border-zinc-300/10 px-6 py-3 text-sm font-medium text-zinc-200 transition-all duration-500 hover:-translate-y-0.5 hover:border-zinc-300/30 hover:bg-zinc-100/5"
          >
            Download Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
