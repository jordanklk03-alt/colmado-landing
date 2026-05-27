import { Droplet, Beer, Wine } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Ron Dominicano',
    description: 'Brugal y Barceló. Los rones más icónicos de República Dominicana. Perfectos para disfrutar solo o en tus bebidas favoritas.',
    icon: Droplet,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663493930384/bnzY8ZPTnsMF9HbFfegyZD/brugal-ron-4kZB3MuKksBRSarh38QEpD.webp',
    color: 'from-amber-600 to-orange-600',
    brands: ['Brugal', 'Barceló']
  },
  {
    id: 2,
    name: 'Cerveza Presidente',
    description: 'La cerveza número uno de República Dominicana. Fría, refrescante y perfecta para cualquier momento.',
    icon: Beer,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663493930384/bnzY8ZPTnsMF9HbFfegyZD/presidente-cerveza-DRrJYu9CgipHiEct6cKRcU.webp',
    color: 'from-yellow-500 to-amber-500',
    brands: ['Presidente']
  },
  {
    id: 3,
    name: 'Whisky Premium',
    description: 'Selección de whiskies importados. Desde scotches clásicos hasta opciones premium para los más exigentes.',
    icon: Wine,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663493930384/bnzY8ZPTnsMF9HbFfegyZD/whisky-premium-CQosBuFdKKTH6WmJiXtSHm.webp',
    color: 'from-amber-700 to-red-700',
    brands: ['Macallan', 'Johnnie Walker', 'Jack Daniels']
  }
];

export default function Products() {
  return (
    <section id="productos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestras Bebidas Premium
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Las mejores marcas dominicanas e internacionales. Disfruta de la calidad que mereces.
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
                  
                  {/* Brands */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.brands.map((brand) => (
                      <span
                        key={brand}
                        className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full py-2 px-4 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-all duration-200">
                    Consultar Disponibilidad
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center animate-fadeInUp">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Vive la Experiencia Dominicana
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Disfruta de las mejores bebidas dominicanas e internacionales en LA RAZA RD. Reserva tu mesa y vive una noche inolvidable.
          </p>
          <a
            href="https://wa.me/18095995176?text=Hola,%20me%20gustaría%20reservar%20una%20mesa%20en%20LA%20RAZA%20RD"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Reservar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
