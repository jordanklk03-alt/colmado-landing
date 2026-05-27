import { ShoppingBag, Zap, Leaf } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Bebidas Refrescantes',
    description: 'Jugos naturales, refrescos y bebidas frías para toda la familia',
    icon: ShoppingBag,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663493930384/bnzY8ZPTnsMF9HbFfegyZD/products-showcase-NXctBHpo9BkppW6zCuR5uQ.webp',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'Snacks & Dulces',
    description: 'Galletas, frituras y golosinas para tus momentos especiales',
    icon: Zap,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663493930384/bnzY8ZPTnsMF9HbFfegyZD/products-showcase-NXctBHpo9BkppW6zCuR5uQ.webp',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 3,
    name: 'Productos Básicos',
    description: 'Arroz, aceite, azúcar y todo lo que necesitas para tu hogar',
    icon: Leaf,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663493930384/bnzY8ZPTnsMF9HbFfegyZD/products-showcase-NXctBHpo9BkppW6zCuR5uQ.webp',
    color: 'from-green-500 to-emerald-500'
  }
];

export default function Products() {
  return (
    <section id="productos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Productos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecciona entre nuestras categorías principales. Tenemos todo lo que necesitas a precios accesibles.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <button className="w-full py-2 px-4 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-all duration-200">
                    Ver Más
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center animate-fadeInUp">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿No ves lo que buscas?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Tenemos muchos más productos disponibles. Contáctanos por WhatsApp y pregunta por lo que necesitas.
          </p>
          <a
            href="https://wa.me/18095551234?text=Hola,%20¿qué%20otros%20productos%20tienen%20disponibles?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Consultar Disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}
