import { Music, Users, Sparkles, Clock, Flame, Award } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: 'Bebidas Dominicanas',
    description: 'Ron Brugal, Barceló, Cerveza Presidente. Las marcas más icónicas de República Dominicana.',
    icon: Sparkles,
    color: 'text-amber-600'
  },
  {
    id: 2,
    title: 'Whisky Premium',
    description: 'Selección de whiskies importados para los más exigentes. Disfruta de la mejor calidad.',
    icon: Flame,
    color: 'text-orange-500'
  },
  {
    id: 3,
    title: 'Música en Vivo',
    description: 'Disfruta de música en vivo y DJ sets durante los fines de semana. Ambiente vibrante.',
    icon: Music,
    color: 'text-pink-500'
  },
  {
    id: 4,
    title: 'Abierto Siempre',
    description: 'Disponible de lunes a domingo para que disfrutes cuando quieras. 24/7 para ti.',
    icon: Clock,
    color: 'text-blue-500'
  },
  {
    id: 5,
    title: 'Comunidad Vibrante',
    description: 'Conoce gente interesante en un ambiente acogedor y divertido. Haz amigos nuevos.',
    icon: Users,
    color: 'text-cyan-500'
  },
  {
    id: 6,
    title: 'Eventos Especiales',
    description: 'Organiza tu fiesta, cumpleaños o evento corporativo con nosotros. Experiencia inolvidable.',
    icon: Award,
    color: 'text-yellow-500'
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Por Qué Elegir LA RAZA RD?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más que un bar, es una experiencia de vida nocturna premium dominicana
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0`}>
                    <Icon size={24} className={benefit.color} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-md animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <p className="text-muted-foreground">Años de experiencia</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md animate-fadeInUp" style={{ animationDelay: '500ms' }}>
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <p className="text-muted-foreground">Clientes satisfechos</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md animate-fadeInUp" style={{ animationDelay: '600ms' }}>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Disponibilidad</p>
          </div>
        </div>
      </div>
    </section>
  );
}
