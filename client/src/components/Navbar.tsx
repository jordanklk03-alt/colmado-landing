import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const whatsappNumber = '18095995176'; // Número actualizado
  const whatsappMessage = 'Hola, quiero hacer un pedido en LA RAZA RD';

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Navbar Sticky */}
      <nav className="sticky top-0 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="font-bold text-lg text-foreground hidden sm:inline">LA RAZA RD</span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('productos')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Productos
              </button>
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Beneficios
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('ubicacion')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Ubicación
              </button>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={18} />
                <span>Pedir por WhatsApp</span>
              </a>
            </div>

            {/* Menu Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Menu Mobile */}
          {isOpen && (
            <div className="md:hidden pb-4 animate-fadeInUp">
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => scrollToSection('productos')}
                  className="text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  Productos
                </button>
                <button 
                  onClick={() => scrollToSection('beneficios')}
                  className="text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  Beneficios
                </button>
                <button 
                  onClick={() => scrollToSection('testimonios')}
                  className="text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  Testimonios
                </button>
                <button 
                  onClick={() => scrollToSection('ubicacion')}
                  className="text-left px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  Ubicación
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center"
                >
                  <MessageCircle size={18} />
                  <span>Pedir por WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Botón Flotante WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-30 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 hover:scale-110 active:scale-95 transition-all duration-200 animate-fadeInUp"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
}
