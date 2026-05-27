import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
  const schedules = [
    { day: 'Lunes - Viernes', hours: '7:00 AM - 10:00 PM' },
    { day: 'Sábado', hours: '7:00 AM - 11:00 PM' },
    { day: 'Domingo', hours: '8:00 AM - 10:00 PM' }
  ];

  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ubícanos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos en el corazón de tu barrio, siempre cerca de ti
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Info */}
          <div className="animate-slideInLeft">
            {/* Address */}
            <div className="mb-8 p-6 bg-white rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Dirección</h3>
                  <p className="text-muted-foreground">
                    Calle Principal #123<br />
                    La Esquina, Santo Domingo<br />
                    República Dominicana
                  </p>
                  <a
                    href="https://maps.google.com/?q=Calle+Principal+123+La+Esquina+Santo+Domingo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline mt-2 inline-block"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mb-8 p-6 bg-white rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-4">Horario</h3>
                  <div className="space-y-2">
                    {schedules.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-semibold text-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Contacto</h3>
                  <p className="text-muted-foreground mb-3">
                    Teléfono: <span className="font-semibold text-foreground">(809) 555-1234</span>
                  </p>
                  <a
                    href="https://wa.me/18095551234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex text-sm"
                  >
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="animate-fadeInUp">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              {/* Embedded Google Map */}
              <iframe
                title="Ubicación de Colmado La Esquina"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4527647845!2d-69.94!3d18.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89e5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sSanto%20Domingo%2C%20Dominican%20Republic!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
