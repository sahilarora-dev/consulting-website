export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero Section */}
<section className="relative bg-gradient-to-b from-white to-gray-100 py-32 px-6">
  <div className="max-w-5xl mx-auto text-center">
    
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
      Cloud & AI Solutions for
      <span className="text-blue-600"> Scalable Businesses</span>
    </h1>

    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
      We design, build and scale modern cloud, data and AI platforms
      that drive measurable business impact.
    </p>

    <div className="flex justify-center gap-6">
      <a
        href="/contact"
        className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
      >
        Book a Consultation
      </a>

      <a
        href="/services"
        className="border border-gray-300 px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition"
      >
        Explore Services
      </a>
    </div>

  </div>
</section>

{/* Services Section */}
<section className="py-28 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-16">
      Our Services
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
        
        <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg mb-6 font-bold">
          ☁
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Cloud Consulting
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          Architecture design, migration strategies, cost optimization
          and secure infrastructure setup for scalable growth.
        </p>

        <a href="/services" className="text-blue-600 font-medium hover:underline">
          Learn More →
        </a>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
        
        <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg mb-6 font-bold">
          📊
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Data Engineering
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          Build scalable data pipelines, warehousing and analytics
          platforms that support real-time decision making.
        </p>

        <a href="/services" className="text-blue-600 font-medium hover:underline">
          Learn More →
        </a>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
        
        <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg mb-6 font-bold">
          🤖
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          AI & Machine Learning
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          Intelligent automation, predictive systems and AI-driven
          insights to transform business operations.
        </p>

        <a href="/services" className="text-blue-600 font-medium hover:underline">
          Learn More →
        </a>
      </div>

    </div>
  </div>
</section>


      {/* Why Choose Us */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-12">
      Why Choose Us
    </h2>

    <div className="grid md:grid-cols-3 gap-12">

      <div>
        <h3 className="text-xl font-semibold mb-4">
          Deep Technical Expertise
        </h3>
        <p className="text-gray-600">
          Strong background in cloud architecture, scalable systems,
          and data-driven engineering.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">
          Business-First Approach
        </h3>
        <p className="text-gray-600">
          We align technology solutions with real business outcomes,
          not just technical implementation.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">
          Scalable & Future-Ready
        </h3>
        <p className="text-gray-600">
          Architected systems built for long-term growth,
          performance and adaptability.
        </p>
      </div>

    </div>
  </div>
</section>

{/* Industries Section */}
<section className="py-24 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl font-bold mb-12">
      Industries We Serve
    </h2>

    <div className="grid md:grid-cols-4 gap-8 text-gray-700 font-medium">

      <div className="bg-white py-8 rounded-lg shadow-sm">
        FinTech
      </div>

      <div className="bg-white py-8 rounded-lg shadow-sm">
        Healthcare
      </div>

      <div className="bg-white py-8 rounded-lg shadow-sm">
        SaaS & Startups
      </div>

      <div className="bg-white py-8 rounded-lg shadow-sm">
        E-Commerce
      </div>

    </div>

  </div>
</section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Technology?
        </h2>
        <p className="mb-8">
          Let’s build scalable and future-ready solutions together.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>

    </main>
  );
}