import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

/**
 * Landing Page para Colmado La Esquina
 * 
 * Diseño moderno, responsive y optimizado para Netlify
 * - Navbar sticky con navegación y botón WhatsApp
 * - Hero section con CTA principal
 * - Secciones de productos, beneficios, testimonios y ubicación
 * - Footer con enlaces y redes sociales
 * - Botón flotante de WhatsApp
 * - Animaciones suaves y lazy loading de imágenes
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Products Section */}
        <Products />

        {/* Benefits Section */}
        <Benefits />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Location Section */}
        <Location />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
