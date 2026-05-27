import { Zap, Heart, DollarSign, Clock, Users, Shield } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: 'Entrega Rápida',
    description: 'Recibe tu pedido en 30 minutos o menos, directo en tu casa',
    icon: Zap,
    color: 'text-blue-500'
  },
  {
    id: 2,
    title: 'Atención Cercana',
    description: 'Personal amable y disponible para ayudarte en todo momento',
    icon: Heart,
    color: 'text-red-500'
  },
  {
    id: 3,
    title: 'Precios Accesibles',
    description: 'Ofertas y promociones especiales para nuestros clientes',
    icon: DollarSign,
    color: 'text-green-500'
  },
  {
    id: 4,
    title: 'Abierto Siempre',
    description: 'Disponible de lunes a domingo para tu comodidad',
    icon: Clock,
    color: 'text-orange-500'
  },
  {
    id: 5,
    title: 'Comunidad Local',
    description: 'Apoyamos a pequeños productores de la zona',
    icon: Users,
    color: 'text-purple-500'
  },
  {
    id: 6,
    title: 'Garantía de Calidad',
    description: 'Productos frescos y de calidad garantizada',
    icon: Shield,
    color: 'text-cyan-500'
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Por Qué Elegir Colmado La Esquina?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos más que una tienda, somos parte de tu comunidad
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
            <p className="text-muted-foreground">Años de servicio</p>
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
