export function SectionTag({ children, light = false }) {
  return (
    <span
      className={`inline-block font-semibold text-[0.85rem] px-4 py-1.5 rounded-full uppercase tracking-widest ${
        light
          ? 'bg-white/15 text-white'
          : 'bg-green-100 text-green-700'
      }`}
    >
      {children}
    </span>
  );
}
