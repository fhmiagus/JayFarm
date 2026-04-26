import { SectionTag } from './SectionTag';

export function SectionHeader({ tag, title, description, light = false }) {
  return (
    <div className="text-center mb-16">
      <SectionTag light={light}>{tag}</SectionTag>
      <h2
        className={`font-display text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg max-w-2xl mx-auto ${
            light ? 'text-white/80' : 'text-gray-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
