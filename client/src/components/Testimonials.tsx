import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'María García',
    role: 'Ama de casa',
    content: 'Excelente servicio, muy rápido y los productos siempre frescos. ¡No puedo vivir sin ellos!',
    rating: 5,
    avatar: '👩‍🦰'
  },
  {
    id: 2,
    name: 'Juan Rodríguez',
    role: 'Empresario',
    content: 'Perfecto para mis necesidades diarias. Atención de primera y precios muy competitivos.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Estudiante',
    content: 'Súper fácil pedir por WhatsApp y la entrega es rapidísima. ¡Recomendado!',
    rating: 5,
    avatar: '👩‍🎓'
  },
  {
    id: 4,
    name: 'Carlos López',
    role: 'Trabajador',
    content: 'Llego tarde del trabajo y siempre encuentro lo que necesito. Muy confiable.',
    rating: 5,
    avatar: '👨‍🔧'
  },
  {
    id: 5,
    name: 'Rosa Pérez',
    role: 'Jubilada',
    content: 'Me encanta que sean cercanos y amables. Se sienten como familia.',
    rating: 5,
    avatar: '👵'
  },
  {
    id: 6,
    name: 'Pedro Sánchez',
    role: 'Padre de familia',
    content: 'Excelente relación calidad-precio. LA RAZA RD es mi tienda de confianza.',
    rating: 5,
    avatar: '👨‍👧‍👦'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Miles de dominicanos confían en nosotros cada día
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="p-6 bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-orange-100 animate-fadeInUp"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fadeInUp">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Quieres compartir tu experiencia con nosotros?
          </p>
          <a
                href="https://wa.me/18095995176?text=Hola,%20quiero%20compartir%20mi%20experiencia%20con%20LA%20RAZA%20RD"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Cuéntanos Tu Historia
          </a>
        </div>
      </div>
    </section>
  );
}
