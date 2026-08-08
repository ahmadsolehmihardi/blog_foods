import heroVideo from '../assets/7246797-uhd_3840_2160_25fps.mp4'

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#302416]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-screen items-end px-6 pb-16 pt-32 sm:px-8 sm:pb-17 lg:px-11 lg:pb-16 xl:px-12">
        <div className="max-w-[52rem]">
          <h1 className="max-w-[52rem] font-serif text-4xl font-medium leading-[1.03] tracking-normal text-[#fff7ee] sm:text-5xl md:text-3xl lg:text-[2.45rem] xl:text-[2.85rem]">
            Extra Virgin Olive Oil makes everything better.
          </h1>

          <a
            href="#"
            className="mt-8 inline-flex min-h-12 w-full max-w-[23rem] items-center justify-center rounded-full bg-[#d9f21f] px-8 font-serif text-lg font-bold uppercase tracking-wide text-[#24301f] shadow-[7px_7px_0_#24301f] transition-transform hover:-translate-y-1 hover:bg-[#f6c453] hover:shadow-[9px_9px_0_#24301f] sm:w-[33rem] lg:text-xl"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
