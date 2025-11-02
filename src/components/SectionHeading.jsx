export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-6 text-center md:text-left">
      <h2 className="text-3xl font-semibold text-[#00303C]">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
    </div>
  );
}