import { MessageCircle, Zap } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = '18095551234'; // Reemplazar con número real
  const whatsappMessage = 'Hola, quiero hacer un pedido en el Colmado La Esquina';

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-orange-50 to-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493930384/bnzY8ZPTnsMF9HbFfegyZD/hero-colmado-LF29AZSWR8HGfuzaXLBXgW.webp"
          alt="Colmado La Esquina"
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="animate-slideInLeft">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">🇩🇴 De aquí, para nuestra gente</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Tu Colmado de <span className="text-primary">Confianza</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Productos frescos, precios accesibles y atención cercana. Pide por WhatsApp y recibe tu pedido rápido en tu casa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                <MessageCircle size={20} />
                <span>Pedir Ahora</span>
              </a>
              
              <button
                onClick={() => {
                  const element = document.getElementById('productos');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary/5 active:scale-95 transition-all duration-200 rounded-lg font-semibold"
              >
                Ver Productos
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Entrega Rápida</p>
                  <p className="text-muted-foreground">En 30 minutos</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">100% Confiable</p>
                  <p className="text-muted-foreground">Desde 2020</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block animate-fadeInUp">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493930384/bnzY8ZPTnsMF9HbFfegyZD/community-vibes-ju4MpnU8YPHWuhJaudWJpB.webp"
                alt="Comunidad del Colmado"
                className="relative rounded-3xl shadow-2xl object-cover w-full h-96"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
