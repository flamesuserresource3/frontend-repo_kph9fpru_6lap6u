function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1496469888073-80de7e952517?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523419409543-a7f6f2c76093?q=80&w=1200&auto=format&fit=crop',
  ];

  return (
    <section id="gallery" className="relative bg-[linear-gradient(180deg,#0b0b0c,40%,#09090b)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="reveal text-center text-2xl font-semibold tracking-wide text-zinc-100 sm:text-3xl">
          Glimpses From The Void
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-6">
          {images.map((src, i) => (
            <figure
              key={i}
              className="reveal group relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800/70 bg-zinc-900/40"
            >
              <img
                src={src}
                alt="Silent Echo screenshot"
                className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
