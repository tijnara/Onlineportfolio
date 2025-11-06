"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">
            Let's <span className="text-orange-500">Work Together</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-orange-500" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <a href="mailto:aranjitarchita@gmail.com" className="text-gray-900 hover:text-orange-500">
                    aranjitarchita@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-orange-500" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Phone</div>
                  <a href="tel:+639686786072" className="text-gray-900 hover:text-orange-500">
                    09686786072
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-orange-500" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="text-gray-900">
                    Lingayen, Pangasinan
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Removed contact form section */}
        </div>
      </div>
    </section>
  );
}
