"use client";

export default function TechStrip() {
  const tools = [
    "aws.svg",
    "azure.svg",
    "google.svg",
    "docker.svg",
    "kubernetes.svg",
    "python.svg",
    "postgres.svg",
    "snowflake.svg",
    "powerbi.svg",
    "looker.svg",
    "airflow.svg",
    "bq.svg",
    "openai.svg",
    "claude.svg",
    "ibm.svg",
    "sap.svg",
    "alteryx.svg",
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Deep Expertise Across Leading Technology Platforms
        </p>
      </div>

<div className="relative w-full overflow-hidden">

  {/* Left Fade */}
  <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

  {/* Right Fade */}
  <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

  {/* Scrolling Logos */}
  <div className="flex gap-24 animate-scroll whitespace-nowrap items-center">
    {tools.concat(tools).map((tool, index) => (
      <img
        key={index}
        src={`/${tool}`}
        alt={tool.replace(".svg", "")}
        className="h-12 w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition duration-500"
      />
    ))}
  </div>

</div>
    </section>
  );
}