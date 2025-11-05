import { Award, Database, Code, Building2 } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: Building2,
      value: "4+",
      label: "Enterprise Systems Built",
    },
    {
      icon: Code,
      value: "10+",
      label: "Technologies Mastered",
    },
    {
      icon: Database,
      value: "5+",
      label: "Years IT Experience",
    },
    {
      icon: Award,
      value: "3+",
      label: "Major Projects Delivered",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <stat.icon className="text-orange-500" size={24} />
                </div>
              </div>
              <div className="text-3xl text-orange-500 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
