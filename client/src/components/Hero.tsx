import { MessageCircle, Music } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = '18095995176';
  const whatsappMessage = 'Hola, me gustaría reservar una mesa en LA RAZA RD';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white">
      {/* Banner LA RAZA - Prominente al inicio */}
      <div className="w-full z-30 shadow-lg">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493930384/bnzY8ZPTnsMF9HbFfegyZD/banner-la-raza-V345udXvy5KA2LTk8XiWpC.webp"
          alt="LA RAZA - Drink Bar Moderno"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      {/* Hero Content Section */}
      <div className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493930384/bnzY8ZPTnsMF9HbFfegyZD/drink-bar-hero-XzZjHxcDoHSLPKtQaC84hm.webp"
            alt="LA RAZA RD - Drink Bar"
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="animate-slideInLeft">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold text-sm">🇩🇴 Bebidas Dominicanas Premium</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                LA RAZA RD - Tu <span className="text-primary">Experiencia</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ron Brugal, Barceló, Cerveza Presidente y Whisky Premium. Vive la mejor noche de tu vida con las bebidas más icónicas de República Dominicana.
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
                  <span>Reservar Mesa</span>
                </a>
                
                <button
                  onClick={() => {
                    const element = document.getElementById('productos');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary/5 active:scale-95 transition-all duration-200 rounded-lg font-semibold"
                >
                  Ver Nuestras Bebidas
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-col sm:flex-row gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Music size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Música en Vivo</p>
                    <p className="text-muted-foreground">Viernes y Sábados</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ambiente Premium</p>
                    <p className="text-muted-foreground">Diseño Moderno</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:block animate-fadeInUp">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493930384/bnzY8ZPTnsMF9HbFfegyZD/bar-interior-aotKHiaWvuP5rof5UkKeVE.webp"
                  alt="Interior LA RAZA RD"
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
      </div>
    </section>
  );
}
