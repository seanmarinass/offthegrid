import AdventuresCarousell from "@/components/adventuresCarousell";

export default function AdventuresSection() {
  return (
    <section className="flex flex-col gap-[1rem] w-full justify-center align-middle items-center">
      <div className="flex flex-col gap-[0.5rem] w-full text-center">
        <h1 className="font-bold text-2xl md:text-4xl">Adventures That Last</h1>
        <h2 className="text-md md:text-2xl">
          Discover the extraordinary trips that took our explorers{" "}
          <span className="font-bold text-primary">OFF THE GRID</span> and into
          the heart of <span className="font-bold text-primary">adventure</span>
        </h2>
      </div>

      <div className="w-full">
        <AdventuresCarousell />
      </div>
    </section>
  );
}
