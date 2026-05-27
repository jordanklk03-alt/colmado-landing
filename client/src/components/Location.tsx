import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
  const schedules = [
    { day: 'Lunes', hours: '12:00 - 24:00' },
    { day: 'Martes', hours: '12:00 - 24:00' },
    { day: 'Miércoles', hours: '12:00 - 24:00' },
    { day: 'Jueves', hours: '12:00 - 24:00' },
    { day: 'Viernes', hours: '12:00 - 24:00' },
    { day: 'Sábado', hours: '12:00 - 24:00' },
    { day: 'Domingo', hours: '12:00 - 24:00' }
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
                    F5J2+PC<br />
                    Santo Domingo Este<br />
                    República Dominicana
                  </p>
                  <a
                    href="https://maps.google.com/?q=F5J2%2BPC+Santo+Domingo+Este+Republica+Dominicana"
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
                    Teléfono: <span className="font-semibold text-foreground">+1 (809) 599-5176</span>
                  </p>
                  <a
                    href="https://wa.me/18095995176"
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
              {/* Street View de Google Maps */}
              <iframe
                title="Street View - Colmado La Esquina"
                src="https://www.google.com/maps/embed?pb=!1m0!3m2!1ses!2sdo!4v1234567890&q=place/F5J2+PC+Santo+Domingo+Este/@18.45,-69.8,3a,75y,90h,90t"
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
