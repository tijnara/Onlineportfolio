import { Card } from "./ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      avatar: "SJ",
      text: "I have been using this for a year now. Everything is so adorable and I can't believe how far it's come. One of the best decisions I made this year!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      avatar: "MC",
      text: "Outstanding work! The attention to detail and code quality is exceptional. Delivered the project on time and exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Founder",
      avatar: "ER",
      text: "I have been using this for a year now. Everything is so adorable and I can't believe how seamless the development process was. Highly recommend!",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "CTO at InnovateCo",
      avatar: "DK",
      text: "Excellent developer with great communication skills. Turned our vision into reality with clean, maintainable code.",
      rating: 5,
    },
    {
      name: "Lisa Anderson",
      role: "Marketing Director",
      avatar: "LA",
      text: "I have been using this for a year now. Everything is so adorable and I can't believe the level of professionalism. Will definitely work together again!",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "E-commerce Owner",
      avatar: "JW",
      text: "The best developer I've worked with. Fast turnaround, great ideas, and always available for questions. Highly professional!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">
            Customer <span className="text-orange-500">Feedbacks</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
