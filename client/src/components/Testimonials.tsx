import { MessageCircle, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    role: 'Visitante Regular',
    content: 'El mejor bar de Santo Domingo. Los cócteles son increíbles y el ambiente es perfecto para pasar una noche genial.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    id: 2,
    name: 'María García',
    role: 'Celebración de Cumpleaños',
    content: 'Celebramos mi cumpleaños aquí y fue espectacular. El equipo es muy profesional y atento.',
    rating: 5,
    avatar: '👩‍🦰'
  },
  {
    id: 3,
    name: 'Juan López',
    role: 'Amante de Cócteles',
    content: 'Los mixólogos realmente saben lo que hacen. Cada cóctel es una obra de arte.',
    rating: 5,
    avatar: '👨‍🍳'
  },
  {
    id: 4,
    name: 'Ana Martínez',
    role: 'Evento Corporativo',
    content: 'Excelente lugar para eventos. La música, la comida y el servicio fueron de primera.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    id: 5,
    name: 'Pedro Sánchez',
    role: 'Visitante Frecuente',
    content: 'Vengo cada viernes. El ambiente es increíble y siempre hay algo nuevo que probar.',
    rating: 5,
    avatar: '👨‍🎓'
  },
  {
    id: 6,
    name: 'Rosa Pérez',
    role: 'Noche de Amigas',
    content: 'LA RAZA RD es nuestro lugar favorito para salir. ¡Recomendado 100%!',
    rating: 5,
    avatar: '👩‍🦱'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiencias reales de personas que han disfrutado en LA RAZA RD
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-2xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center animate-fadeInUp">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Quieres Compartir Tu Experiencia?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            ¿Ya visitaste LA RAZA RD? Nos encantaría escuchar tu opinión
          </p>
          <a
            href="https://wa.me/18095995176?text=Hola,%20quiero%20compartir%20mi%20experiencia%20con%20LA%20RAZA%20RD"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <MessageCircle size={20} />
            Cuéntanos Tu Experiencia
          </a>
        </div>
      </div>
    </section>
  );
}
