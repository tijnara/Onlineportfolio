import { Lightbulb, Layout, Code, Rocket } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Concept & Planning",
      description: "Understanding your requirements and planning the perfect solution with detailed documentation and wireframes.",
    },
    {
      icon: Layout,
      title: "Design & Prototype",
      description: "Creating beautiful, user-friendly designs and interactive prototypes to visualize the end product.",
    },
    {
      icon: Code,
      title: "Development",
      description: "Writing clean, efficient code following best practices and industry standards for optimal performance.",
    },
    {
      icon: Rocket,
      title: "Testing & Deployment",
      description: "Rigorous testing and smooth deployment to ensure your application runs flawlessly in production.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">
            From Concept to Deployment: My <span className="text-orange-500">Seamless Development Process</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A systematic approach to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-orange-200 z-0"></div>
              )}

              {/* Step Card */}
              <div className="relative z-10 bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <step.icon className="text-orange-500" size={28} />
                </div>
                <div className="text-center">
                  <div className="text-orange-500 text-xs mb-2">Step {index + 1}</div>
                  <h3 className="text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
