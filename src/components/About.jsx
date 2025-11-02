import logo from './LogoW.png'
import insta from './insta.png'
import arrow from './Arrow.png'

export default function About() {
  return (
    <section id="about" className="bg-[#00303C] text-white py-6 sm:py-8 md:py-10 xl:py-12 min-h-screen px-4 sm:px-6 md:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-start py-4 md:py-6 xl:p-10">
        
        {/* LEFT */}
        <div className="flex flex-col gap-6 sm:gap-11 md:gap-8 space-y-2 sm:space-y-3">
          
          {/* About + Arrow */}
          <div className="flex items-start gap-10 sm:gap-6 md:gap-8 xl:gap-11 h-auto">
            <h2 className="text-6xl sm:text-6xl md:text-7xl xl:text-8xl font-outfit font-extrabold text-[#C6FD07] leading-none">
              About
            </h2>
            <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 xl:h-20 xl:w-20 rounded-full border-2 border-[#C6FD07] flex items-center justify-center mt-2 sm:mt-3 md:mt-4 flex-shrink-0">
              <img src={arrow} alt="Arrow" className="h-10 w-10 sm:h-10 sm:w-10 md:h-12 md:w-12 xl:h-16 xl:w-16 object-contain" />
            </div>
          </div>

          {/* us | + Founder (inline) */}
          <div className="flex items-center gap-9 sm:gap-6 md:gap-8 xl:gap-12">
            {/* us | */}
            <div className="flex items-center gap-9 sm:gap-4 md:gap-6 xl:gap-9">
              <span className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-outfit font-extrabold text-[#C6FD07] leading-none">us</span>
              <span className="text-5xl sm:text-6xl md:text-7xl xl:text-7xl font-light text-[#C6FD07] scale-x-25">|</span>
            </div>

            {/* Founder Info inline */}
            <div className="flex items-center gap-5 sm:gap-3 md:gap-4">
              <div className="h-8 w-8 sm:h-11 sm:w-11 md:h-12 md:w-12 xl:h-14 xl:w-14 rounded-full bg-[#C6FD07] flex items-center justify-center flex-shrink-0">
                <img src={logo} alt="Founder" className="h-6 w-6 sm:h-9 sm:w-9 md:h-10 md:w-10 xl:h-12 xl:w-12 object-contain" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-xs sm:text-base md:text-lg xl:text-xl whitespace-nowrap">Ajay Chauhan</h4>
                <p className="flex items-center gap-1.5 sm:gap-3 text-white text-[10px] sm:text-sm md:text-base whitespace-nowrap">
                  CEO & Founder 
                  <a 
                    href="https://www.instagram.com/ajaychauhan.designer?igsh=emN5bmt4aXVvbDNm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <img src={insta} alt="Instagram" className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 hover:scale-110 transition-transform" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-10 sm:gap-8 md:gap-10 xl:gap-11 items-center">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#C6FD07]">145+</h3>
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-wide">Projects</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#C6FD07]">76+</h3>
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-wide">Clients</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#C6FD07]">3+</h3>
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-wide whitespace-nowrap">Year Experience</p>
            </div>
          </div>
        </div>

        {/* Divider - visible only on mobile */}
        <span className='h-px w-full xl:hidden bg-[#C6FD07] my-4 sm:my-6'></span>

        {/* RIGHT */}
        <div className="space-y-3 sm:space-y-4 md:space-y-5 xl:space-y-4 w-full">
          <h2 className="text-2xl sm:text-2xl md:text-3xl xl:text-3xl font-extrabold leading-tight">
            Helping entrepreneurs & their businesses Go Big Online
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl xl:text-2xl leading-tight font-medium text-gray-200">
            We're your creative partner in building an online presence that doesn't just look good it grows you online.
          </h3>
          <p className="text-sm sm:text-base md:text-base xl:text-base text-gray-300 leading-relaxed">
            At HayViral, we understand the unique challenges businesses face in today's digital first world. That's why we're committed to providing affordable, customized solutions that make a real difference. From eye catching websites to strategies that drive traffic and sales, our mission is simple: help you compete and win online.
          </p>
        </div>
      </div>
    </section>
  )
}