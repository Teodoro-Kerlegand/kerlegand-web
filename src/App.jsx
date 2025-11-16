import React from "react";
import { motion } from "framer-motion";

// --- Colores (ajusta a los del manual si quieres) ---
const colors = {
  olive: "#6B7D53",   // verde olivo
  mustard: "#D4A017", // mostaza
  beige: "#F6F2E8",
  dark: "#1F2937",
  light: "#FFFFFF",
};

// --- Fotos de la sección "Aprendemos jugando" ---
const fotosVida = [
  { src: "/images/juego-1.jpg", alt: "Niños pintando en el aula" },
  { src: "/images/juego-2.jpg", alt: "Niñas leyendo cuentos en círculo" },
  { src: "/images/juego-3.jpg", alt: "Niños jugando en el patio" },
  { src: "/images/juego-4.jpg", alt: "Actividad con materiales didácticos" },
  { src: "/images/juego-5.jpg", alt: "Niñas armando rompecabezas" },
  { src: "/images/juego-6.jpg", alt: "Niños explorando la naturaleza" },
  { src: "/images/juego-7.jpg", alt: "Juego libre supervisado" },
  { src: "/images/juego-8.jpg", alt: "Niñas y niños en actividad grupal" },
];

export default function App() {
  return (
    <div
      className="min-h-screen bg-[var(--beige)] text-[var(--dark)]"
      style={{
        "--olive": colors.olive,
        "--mustard": colors.mustard,
        "--beige": colors.beige,
        "--dark": colors.dark,
        "--light": colors.light,
        fontFamily:
          'Montserrat, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Segoe UI Emoji"',
      }}
    >
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Reemplaza por <img src="/images/logo.png" ... /> cuando tengas logo */}
            <div className="w-10 h-10 rounded-xl bg-[var(--olive)]" />
            <div>
              <p className="text-sm tracking-wider text-[var(--olive)]">
                CENTRO EDUCATIVO INFANTIL
              </p>
              <h1 className="text-xl font-bold">Teodoro A. Kerlegand</h1>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#pilares" className="hover:text-[var(--olive)]">
              Modelo educativo
            </a>
            <a href="#vida" className="hover:text-[var(--olive)]">
              Vida escolar
            </a>
            <a href="#familia" className="hover:text-[var(--olive)]">
              Familia y comunidad
            </a>
            <a href="#testimonios" className="hover:text-[var(--olive)]">
              Testimonios
            </a>
            <a href="#contacto" className="hover:text-[var(--olive)]">
              Contacto
            </a>
            <a
              href="#admisiones"
              className="ml-2 inline-block rounded-2xl px-4 py-2 bg-[var(--mustard)] text-black font-semibold shadow-sm hover:opacity-90"
            >
              The School of Champions
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
 {/* CUADRO DEL LOGO (MOVIDO ARRIBA) */}
<div className="w-full flex justify-center mb-12">
  <div className="w-48 h-48 bg-white rounded-2xl shadow-md border border-black/10 flex items-center justify-center">
    <img
      src="/images/logo.png"
      alt="Escudo Kerlegand"
      className="w-36 h-36 object-contain"
    />
  </div>
</div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight text-center"
            >
              EDUCACIÓN DE VANGUARDIA
            </motion.h2>
            <p className="mt-12 text-lg text-gray-700 text-justify">
  Acompañamos cada paso con cariño y propósito, para que niñas y niños crezcan seguros,
  felices y llenos de curiosidad. Nuestra educación de vanguardia, junto con un
  inglés profundamente avanzado, abre puertas y siembra en ellos las
  oportunidades que transformarán su vida futura.
</p>
            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href="#admisiones"
                className="rounded-2xl px-5 py-3 bg-[var(--olive)] text-white font-semibold shadow-sm hover:opacity-90"
              >
                Inscripciones abiertas
              </a>
              <a
                href="#pilares"
                className="rounded-2xl px-5 py-3 border border-[var(--olive)] text-[var(--olive)] font-semibold hover:bg-[var(--olive)] hover:text-white"
              >
                Conoce nuestro modelo
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <li className="flex items-center gap-2">
                ✅ Juego como herramienta pedagógica
              </li>
              <li className="flex items-center gap-2">
                ✅ Entorno protector y estimulante
              </li>
              <li className="flex items-center gap-2">
                ✅ Educación consciente y en valores
              </li>
              <li className="flex items-center gap-2">
                ✅ Comunidad cercana y colaborativa
              </li>
            </ul>
          </div>
          <div>
            {/* FOTO PRINCIPAL DEL HERO */}
            <div className="aspect-[4/5] w-full rounded-3xl bg-white shadow-sm border border-black/5 overflow-hidden">
              <img
                src="/images/hero-aula.jpg"
                alt="Niñas y niños jugando y aprendiendo en el aula del Centro Educativo Infantil Teodoro A. Kerlegand en Veracruz"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Sugerencia: usa una foto real del aula/niños (con permisos) o un
              frame del video Sora.
            </p>
          </div>
        </div>
      </section>

      {/* Modelo educativo */}
      <section id="pilares" className="bg-white py-16 border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-2xl md:text-3xl font-bold">
            Nuestro modelo educativo
          </h3>
          <p className="mt-2 text-gray-700">
            Cuatro pilares guían nuestro día a día y dan sentido a cada
            experiencia de aprendizaje.
          </p>
          <div className="mt-8 grid md:grid-cols-4 gap-5">
            {[
              {
                title: "Tradición educativa",
                desc: "Trayectoria y valores que perduran.",
              },
              {
                title: "Aprendizaje cotidiano",
                desc: "Lo que ocurre en el aula: juego, retos, progresos reales.",
              },
              {
                title: "Familia y comunidad",
                desc: "Crecemos juntos: participación y cercanía.",
              },
              {
                title: "Educación integral",
                desc: "Emociones, hábitos, respeto y pensamiento crítico.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 bg-[var(--beige)] border border-black/5"
              >
                <h4 className="font-semibold text-lg text-[var(--olive)]">
                  {c.title}
                </h4>
                <p className="mt-1 text-sm text-gray-700">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vida escolar */}
      <section id="vida" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-2xl md:text-3xl font-bold">Aprendemos jugando</h3>
          <p className="mt-2 text-gray-700">
            Pintamos, leemos, exploramos la naturaleza y convivimos con alegría.
          </p>

          {/* GRID CON FOTOS REALES */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {fotosVida.map((foto, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm"
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <p className="mt-3 text-xs text-gray-500">
            Reemplaza los archivos en <code>/public/images</code> por tus fotos
            reales (optimiza peso y usa nombres claros).
          </p>
        </div>
      </section>

      {/* Familia y comunidad */}
      <section id="familia" className="py-16 bg-[var(--olive)] text-white">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">
              Familia y comunidad
            </h3>
            <p className="mt-2 text-white/90 text-justify">
              La participación de madres y padres, los encuentros formativos y
              las tradiciones veracruzanas fortalecen nuestra identidad y el
              aprendizaje de cada niña y niño.
            </p>
            <ul className="mt-4 space-y-2 text-white/90 text-sm">
              <li>• Círculos escolares y talleres para familias</li>
              <li>• Celebraciones y festivales con identidad local</li>
              <li>• Comunicación cercana y respeto mutuo</li>
            </ul>
          </div>

          {/* FOTO DE EVENTO CON FAMILIAS */}
          <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white/10 border border-white/20">
            <img
              src="/images/familia-evento.jpg"
              alt="Madres, padres y niños participando en un evento escolar en el Centro Educativo Infantil Teodoro A. Kerlegand"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-16 bg-white border-y border-black/5">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="text-2xl md:text-3xl font-bold">
            Lo que dicen las familias
          </h3>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              {
                quote:
                  "Mi hija llega feliz todos los días. Aprender jugando ha sido un cambio hermoso.",
                name: "María G.",
              },
              {
                quote: "Se siente un ambiente de respeto y cariño auténtico.",
                name: "Jorge R.",
              },
              {
                quote: "La comunicación con las maestras es cercana y clara.",
                name: "Carolina P.",
              },
            ].map((t, i) => (
              <blockquote
                key={i}
                className="rounded-2xl p-5 bg-[var(--beige)] border border-black/5"
              >
                <p className="text-gray-800">“{t.quote}”</p>
                <footer className="mt-3 text-sm text-gray-600">
                  — {t.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Admisiones */}
      <section
        id="admisiones"
        className="py-16 bg-gradient-to-br from-[var(--mustard)] to-yellow-200"
      >
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--dark)]">
            Inscripciones abiertas
          </h3>
          <p className="mt-2 text-[var(--dark)]/80 max-w-2xl mx-auto">
            Agenda una visita y conoce cómo acompañamos con afecto y propósito
            el crecimiento de tu hija o hijo.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href="#contacto"
              className="rounded-2xl px-6 py-3 bg-[var(--olive)] text-white font-semibold shadow-sm hover:opacity-90"
            >
              Agenda tu visita
            </a>
            <a
              href="#pilares"
              className="rounded-2xl px-6 py-3 border border-[var(--olive)] text-[var(--olive)] font-semibold hover:bg-[var(--olive)] hover:text-white"
            >
              Conoce el modelo
            </a>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Contacto</h3>
            <p className="mt-2 text-gray-700">
              Estamos en Veracruz, México. Escríbenos para informes y
              admisiones.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p>
                <strong>Tel.:</strong> (229) 1337389
              </p>
              <p>
                <strong>Email:</strong> informes@kerlegand.edu.mx
              </p>
              <p>
                <strong>Dirección:</strong> Cofre de Perote #837. Esq. J.B. Lobos, Los Volcanes, Ver.
              </p>
              <p>
                <strong>Horario:</strong> Lun–Vie 8:00–20:00
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 overflow-hidden">
            {/* FOTO DE FACHADA O MAPA */}
            <div className="aspect-[16/9] bg-[var(--beige)] overflow-hidden">
              <img
                src="/images/fachada-escuela.jpg"
                alt="Fachada del Centro Educativo Infantil Teodoro A. Kerlegand en Veracruz"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4 text-xs text-gray-500">
              Fotografía de la fachada del Centro Educativo Infantil Teodoro A.
              Kerlegand.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[var(--dark)] text-white">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm">
            © {new Date().getFullYear()} Centro Educativo Infantil Teodoro A.
            Kerlegand
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:underline">
              Aviso de privacidad
            </a>
            <a href="#" className="hover:underline">
              Términos de uso
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
