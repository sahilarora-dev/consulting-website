export default function ServicesPage() {
  return (
    <main className="bg-gray-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-16 text-center">
          Our Services
        </h1>

        {/* Cloud Consulting */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">
            Cloud Consulting
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We design secure, scalable cloud architectures tailored to your
            business needs. From migration strategies to cost optimization,
            our approach ensures long-term stability and growth.
          </p>
        </section>

        {/* Data Engineering */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">
            Data Engineering
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Build modern data platforms that power analytics, reporting,
            and real-time decision making. We create robust pipelines
            that scale with your organization.
          </p>
        </section>

        {/* AI & ML */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">
            AI & Machine Learning
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Implement intelligent automation, predictive models,
            and AI-driven insights to unlock operational efficiency
            and competitive advantage.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center mt-24">
          <h3 className="text-2xl font-semibold mb-6">
            Ready to discuss your project?
          </h3>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Schedule a Consultation
          </a>
        </div>

      </div>
    </main>
  );
}