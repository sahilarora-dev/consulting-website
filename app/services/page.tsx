export default function ServicesPage() {
  return (
    <main className="bg-gray-50 text-gray-900">

      <div className="max-w-6xl mx-auto px-6 py-28">

        {/* Page Header */}
        <section className="text-center mb-32">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
            Our <span className="text-blue-600">Services</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide strategic cloud, data and AI solutions designed for
            scalability, operational efficiency and measurable business impact.
          </p>
        </section>


        {/* Services Grid */}
        <div className="space-y-32">

          {/* Cloud */}
          <section className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Cloud Architecture & Modernization
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Enterprise-grade infrastructure design built for security,
                performance and cost optimization across AWS and Google Cloud.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li>• Cloud migration strategy</li>
                <li>• Infrastructure design & optimization</li>
                <li>• Licensing & cost governance</li>
                <li>• Security & compliance architecture</li>
                <li>• Performance monitoring & tuning</li>
              </ul>
            </div>

            <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="font-semibold mb-4 text-blue-600">
                Ideal For
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Organizations modernizing legacy systems,
                migrating to scalable cloud environments or
                optimizing infrastructure for long-term growth.
              </p>
            </div>
          </section>


          {/* Data */}
          <section className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm md:order-1 order-2">
              <h3 className="font-semibold mb-4 text-blue-600">
                Core Capabilities
              </h3>
              <p className="text-gray-600 leading-relaxed">
                BigQuery architecture, SQL & Python engineering,
                scalable ETL pipelines and enterprise analytics frameworks.
              </p>
            </div>

            <div className="md:order-2 order-1">
              <h2 className="text-3xl font-bold mb-6">
                Data Engineering & Analytics
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Transform raw data into strategic intelligence through
                scalable modeling, warehousing and advanced analytics systems.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li>• Data warehouse architecture (BigQuery)</li>
                <li>• SQL & Python data engineering</li>
                <li>• ETL / ELT pipeline design</li>
                <li>• Advanced analytics & reporting</li>
                <li>• Data governance frameworks</li>
              </ul>
            </div>
          </section>


          {/* AI */}
          <section className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Artificial Intelligence & Automation
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Implement intelligent systems that automate processes,
                enhance forecasting accuracy and unlock operational efficiency.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li>• Predictive modeling & ML pipelines</li>
                <li>• AI-driven automation frameworks</li>
                <li>• Workflow optimization</li>
                <li>• Applied AI solutions</li>
                <li>• Intelligent system architecture</li>
              </ul>
            </div>

            <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="font-semibold mb-4 text-blue-600">
                Business Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Increase efficiency, reduce operational overhead
                and create data-driven competitive advantage.
              </p>
            </div>
          </section>


          {/* BI */}
          <section className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm md:order-1 order-2">
              <h3 className="font-semibold mb-4 text-blue-600">
                Platforms & Tools
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Looker, Power BI, Alteryx and seamless BI
                ecosystem migration with governance and scalability.
              </p>
            </div>

            <div className="md:order-2 order-1">
              <h2 className="text-3xl font-bold mb-6">
                Business Intelligence & Tool Migration
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Executive-ready dashboards and analytics platforms
                that provide real-time clarity for leadership teams.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li>• BI dashboard implementation</li>
                <li>• Looker & Power BI deployment</li>
                <li>• Alteryx automation workflows</li>
                <li>• BI tool migration strategy</li>
                <li>• Data visualization architecture</li>
              </ul>
            </div>
          </section>

        </div>


        {/* CTA */}
        <section className="mt-36 text-center bg-white p-16 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-3xl font-bold mb-6">
            Let’s Build Scalable Systems Together
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            From cloud architecture to AI-driven automation,
            we design technology systems that power long-term growth.
          </p>

          <a
            href="/contact"
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Schedule a Consultation
          </a>
        </section>

      </div>
    </main>
  );
}