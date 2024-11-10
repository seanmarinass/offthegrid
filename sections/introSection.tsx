import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IntroSummary {
  title: string;
  content: string;
}

const sumamries: IntroSummary[] = [
  {
    title: "What We Do",
    content:
      "Redefining travel with unique, adventure-filled journeys that go beyond the ordinary.",
  },
  {
    title: "Discover Your Next Adventure",
    content:
      "Curated trips for thrill-seekers and cultural enthusiasts, offering authentic and unforgettable experiences.",
  },
  {
    title: "Join the Off The Grid Community",
    content:
      "Connect with fellow explorers! Get travel tips, updates on new adventures, and exclusive offers.",
  },
  {
    title: "Book Your Journey",
    content:
      "Your next adventure awaits! Explore our trips, learn about each destination, and book with ease.",
  },
];

export default function IntroSection() {
  return (
    <section className="w-full flex flex-col md:grid md:grid-cols-4 gap-[2rem]">
      {sumamries.map((summary, index) => (
        <Card key={index} className="shadow-lg border-none">
          <CardHeader>
            <CardTitle className="text-xl">{summary.title}</CardTitle>
          </CardHeader>

          <CardContent>{summary.content}</CardContent>
        </Card>
      ))}
    </section>
  );
}
