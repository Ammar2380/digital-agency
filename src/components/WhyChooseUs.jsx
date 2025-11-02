import img from './why.png'
import tick from './tick.png'
import img2 from './whyimg.png'

export default function WhyChooseUs() {
  return (
    <section className="bg-[#00303C] text-white py-20 md:py-16 px-6 md:px-12 flex justify-center items-center flex-col">
      {/* Heading */}
      <div className="text-center">
        <span className="inline-block px-4 py-1 font-outfit border border-[#C6FF00] text-[#C6FF00] rounded-full font-semibold">
          Why Choose Us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-6">
       Big Agency Skills. Business Care.
        </h2>
        <p className="text-gray-300 mt-3">
          We’re not just another digital agency we’re a partner who gets it.
        </p>
      </div>

      {/* Mobile + Tablet (stacked layout) */}
      <div
        className="gap-10 w-80 h-80 lg:hidden mt-10"
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="space-y-5 w-full px-6 lg:hidden mt-6">
        {[
          "Affordable, customized packages tailored for small businesses",
  "No confusing jargon—just clear strategies and real results",
  "A creative team that treats your business like our own",
  "Proven expertise across SEO, development, branding, and marketing",
        ].map((text, i) => (
          <div key={i} className="flex items-start gap-3">
            <img src={tick} alt="tick" className="h-6 w-6" />
            <p className="leading-tight">{text}</p>
          </div>
        ))}
      </div>

      {/* Laptop/Desktop (grid layout) */}
      <div
        className="hidden lg:grid lg:grid-cols-3 gap-10 w-full h-80 items-center mt-12"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Column 1 */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <img src={tick} alt="tick" className="h-7 w-7" />
            <p>Affordable, customized packages tailored for small businesses</p>
          </div>
          <div className="flex items-start gap-3">
            <img src={tick} alt="tick" className="h-7 w-7" />
            <p> No confusing jargon—just clear strategies and real results</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-6 relative lg:left-90 xl:left-100">
          <div className="flex items-start gap-3">
            <img src={tick} alt="tick" className="h-7 w-7" />
            <p>A creative team that treats your business like our own</p>
          </div>
          <div className="flex items-start gap-3">
            <img src={tick} alt="tick" className="h-7 w-7" />
            <p>Proven expertise across SEO, development, branding, and marketing</p>
          </div>
        </div>

        {/* Column 3 for balance */}
        <div></div>
      </div>
    </section>
  )
}
