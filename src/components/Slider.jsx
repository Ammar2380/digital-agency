
import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { ArrowLeft, ArrowRight } from "lucide-react"


function LogosCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [AutoScroll({ playOnInit: true, speed: 1 })]
  )

  const logos = [
    {
      id: "logo-1",
      description: "Astro",
      image: "https://www.shadcnblocks.com/images/block/logos/astro.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Figma",
      image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Next.js",
      image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "React",
      image: "https://www.shadcnblocks.com/images/block/logos/react.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "shadcn/ui",
      image: "https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Supabase",
      image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Tailwind CSS",
      image: "https://www.shadcnblocks.com/images/block/logos/tailwind.svg",
      className: "h-4 w-auto",
    },
    {
      id: "logo-8",
      description: "Vercel",
      image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg",
      className: "h-7 w-auto",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold lg:text-4xl">
          Trusted by these companies
        </h2>
      </div>
      <div className="relative mx-auto max-w-6xl">
        {/* Embla viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex basis-1/3 justify-center sm:basis-1/4 md:basis-1/5 lg:basis-1/6 px-6"
              >
                <img
                  src={logo.image}
                  alt={logo.description}
                  className={logo.className}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent"></div>

        {/* Manual nav buttons */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute -left-12 top-1/2 -translate-y-1/2 rounded-full bg-gray-200 p-2 shadow hover:bg-gray-300"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute -right-12 top-1/2 -translate-y-1/2 rounded-full bg-gray-200 p-2 shadow hover:bg-gray-300"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}

export default LogosCarousel
