import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ZACEC single-file React component (TailwindCSS required)
// Place this file in `src/components/ZacecWebsite.jsx` inside a Vite+React+Tailwind project.
// Replace images in /public/assets/ (logo.png, building1.jpg, building2.jpg, building3.jpg)

export default function ZacecWebsite() {
  const slides = [
    "/assets/building1.jpg",
    "/assets/building2.jpg",
    "/assets/building3.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-b from-white to-gray-50">
      {/* Fixed Top Header with logo and nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/40 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/assets/logo.png"
              alt="ZACEC Logo"
              className="w-12 h-12 object-contain rounded-full shadow-md"
              style={{ position: "sticky", top: 12 }}
            />
            <div>
              <div className="text-lg font-semibold">Zarif Amiri Construction & Engineering Company</div>
              <div className="text-sm text-gray-600">ZACEC</div>
            </div>
          </div>

          <nav>
            <ul className="flex gap-4 items-center">
              <li>
                <a href="#home" className="px-3 py-2 rounded-full hover:bg-gray-100 transition">Home</a>
              </li>
              <li>
                <a href="#projects" className="px-3 py-2 rounded-full hover:bg-gray-100 transition">Projects</a>
              </li>
              <li>
                <a href="#services" className="px-3 py-2 rounded-full hover:bg-gray-100 transition">Services</a>
              </li>
              <li>
                <a href="#about" className="px-3 py-2 rounded-full hover:bg-gray-100 transition">About</a>
              </li>
              <li>
                <a href="#contact" className="px-3 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero with background building images carousel */}
      <section id="home" className="pt-24">
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${slides[index]})`, filter: "brightness(0.6)" }}
          />

          {/* Overlay content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 max-w-6xl mx-auto px-6 h-full flex items-center"
          >
            <div className="text-white w-full">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                Zarif Amiri Construction & Engineering Company (ZACEC)
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow">
                Building resilient infrastructure, designing with integrity — from water systems to modern commercial buildings.
              </p>

              <div className="mt-6 flex gap-3">
                <a href="#projects" className="inline-block px-5 py-3 bg-white/90 text-gray-900 rounded-full font-medium shadow hover:scale-105 transform transition">
                  View Projects
                </a>
                <a href="#contact" className="inline-block px-5 py-3 bg-transparent text-white ring-1 ring-white/60 rounded-full font-medium hover:scale-105 transform transition">
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>

          {/* small slide indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={`w-10 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 -mt-16 relative z-10">
        {/* Services Section */}
        <section id="services" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Construction Management", desc: "Project planning, site supervision, quality control, procurement." },
              { title: "Civil & Structural Design", desc: "RCC, steel structure design, structural rehabilitation and inspections." },
              { title: "Water Supply & WASH", desc: "Well design, water reservoirs, sanitation solutions, pump & solar systems." },
            ].map((s) => (
              <motion.div
                key={s.title}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl p-6 border-2 border-blue-50 bg-white shadow-sm"
              >
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <motion.article
                key={n}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow"
              >
                <div className="h-44 bg-gray-200 bg-center bg-cover" style={{ backgroundImage: `url(/assets/project${n}.jpg)` }} />
                <div className="p-4">
                  <h4 className="font-semibold">Project {n} — Commercial Building</h4>
                  <p className="text-sm text-gray-600 mt-2">Design & build contract: foundation, structure, MEP coordination and finishing works.</p>
                  <div className="mt-3 flex gap-2">
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700">Completed</span>
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-50 text-green-700">Budget: Confidential</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* About + Contact */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div className="md:col-span-2 rounded-2xl p-6 border border-gray-100 bg-white shadow">
            <h3 className="text-xl font-semibold">About ZACEC</h3>
            <p className="mt-3 text-gray-600">Zarif Amiri Construction & Engineering Company (ZACEC) provides engineering, construction, and infrastructure services across Afghanistan. Our team specializes in civil and structural design, water systems, and full project implementation from feasibility to handover.</p>

            <h4 className="mt-6 font-semibold">Why choose us?</h4>
            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-2">
              <li>Local expertise with international standards</li>
              <li>Integrated design and build solutions</li>
              <li>Transparent project management and reporting</li>
            </ul>
          </motion.div>

          <motion.aside className="rounded-2xl p-6 border border-gray-100 bg-white shadow">
            <h4 className="font-semibold">Contact & Office</h4>
            <div className="mt-3 text-sm text-gray-700 space-y-2">
              <div><strong>Email:</strong> zacec.company@gmail.com</div>
              <div><strong>Phone:</strong> +93 784942903 / 0778794268</div>
              <div><strong>Address:</strong> House #3, 7th District, Darulaman Road, Shora Street, Kabul, Afghanistan.</div>
              <div><strong>Office Location:</strong> <a href="https://maps.google.com/?q=34.501794,69.151350" target="_blank" rel="noreferrer" className="text-blue-600 underline">34.501794, 69.151350</a></div>
            </div>

            <div className="mt-4">
              <a href="mailto:zacec.compant@gmail.com" className="inline-block px-4 py-2 rounded-full bg-blue-600 text-white">Email Us</a>
            </div>
          </motion.aside>
        </section>

        {/* Footer */}
        <footer className="mt-12 mb-24 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Zarif Amiri Construction & Engineering Company (ZACEC). All Rights Reserved.
        </footer>
      </main>

      {/* Small fixed floating contact button */}
      <a href="tel:+93784942903" className="fixed right-6 bottom-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition z-50">
        Call Us
      </a>
    </div>
  );
}
