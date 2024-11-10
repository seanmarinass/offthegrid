interface SectionHeaderProps {
  title: string;
  summary: string;
}

export default function SectionHeader({ title, summary }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-[0.5rem] w-full text-center">
      <h1 className="text-2xl md:text-4xl">{title}</h1>
      <h2 className="text-md md:text-xl">{summary}</h2>
    </div>
  );
}
