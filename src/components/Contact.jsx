import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import img5 from './calendly.png';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nameRef.current.value.trim() ||
      !emailRef.current.value.trim() ||
      !messageRef.current.value.trim()
    ) {
      nameRef.current.focus();
      return;
    }

    setLoading(true);

    emailjs.send(
  "service_iomgprj",     // New Service ID
  "template_upwjzbk",    // Your existing Template ID
  {
    name: nameRef.current.value,
    email: emailRef.current.value,
    message: messageRef.current.value,
  },
  "Jz9bj5v9gJJlcavUj"    // Your Public Key
)
.then(
  (response) => {
    setLoading(false);
    setSent(true);

    // Clear form fields
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";

    setTimeout(() => setSent(false), 3000); // hide success after 3s
  },
  (error) => {
    setLoading(false);
    alert("Failed to send message. Please try again.");
    console.error(error);
  }
);

  };

  return (
    <section id="contact" className="scroll-mt-10 px-6 md:px-20 py-16 bg-[#00303C] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-4 md:px-0 gap-6">
  
  {/* Left Side: Heading + Subheading */}
  <div className="text-center md:text-left space-y-2 md:max-w-xl">
    <h1 className="font-bold text-3xl md:text-4xl">
      Ready to Grow Your Business Online?
    </h1>
    <p className="text-sm md:text-base opacity-70 font-extralight">
      Let’s build a digital strategy that works for you.
    </p>
  </div>

  {/* Right Side: Button */}
  <div className="flex justify-center md:justify-end w-full md:w-auto">
    <a
      href="https://calendly.com/ajaykumarchouhan/hayviral-free-discovering-call"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="border border-[#00303C] bg-[#C6FD07] h-10 px-5 md:px-6 py-2 rounded-full font-semibold flex items-center gap-2 md:gap-3 shadow-md text-sm md:text-base text-[#00303C] hover:scale-[1.02] transition">
        <img className="h-4 md:h-5" src={img5} alt="Call Icon" />
        Book a Free Discovery Call
      </button>
    </a>
  </div>

</div>


      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 bg-[#00303C] p-8 rounded-2xl shadow-lg border border-[#C6FF00]"
      >
        <input
          ref={nameRef}
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-lg border text-white border-gray-300"
        />
        <input
          ref={emailRef}
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-lg border text-white border-gray-300"
        />
        <textarea
          ref={messageRef}
          placeholder="Message"
          className="p-4 rounded-lg border text-white border-gray-300 md:col-span-2 h-32 resize-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-[#C6FF00] text-[#00303C] px-6 py-3 rounded-full font-semibold hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {sent && (
          <p className="md:col-span-2 text-green-600 font-medium text-center">
            Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
}
