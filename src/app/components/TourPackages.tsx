import { Check, Clock, Banknote } from 'lucide-react';

const packages = [
  {
    name: 'Оглядовий маршрут',
    difficulty: 'Легкий',
    duration: '3 години',
    price: '2500',
    features: [
      'Спокійні лісові стежки',
      'Панорамні оглядові майданчики',
      'Фотозупинки',
      'Підходить для сімей',
      'Професійний гід'
    ],
    popular: false
  },
  {
    name: 'Гірський дослідник',
    difficulty: 'Середній',
    duration: '5 годин',
    price: '4000',
    features: [
      'Маршрути гірськими хребтами',
      'Переправи через річки',
      'Відвідування автентичного села',
      'Обід місцевої кухні включено',
      'Мала група (макс. 6 осіб)'
    ],
    popular: true
  },
  {
    name: 'Вершинна пригода',
    difficulty: 'Складний',
    duration: '8 годин',
    price: '6500',
    features: [
      'Високогірні маршрути',
      'Віддалена місцевість',
      'Альпійські луки',
      'Професійна фотозйомка',
      'Усі харчування включені'
    ],
    popular: false
  }
];

export function TourPackages() {
  return (
    <section id="tours" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl text-foreground">
            Наші маршрути
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Оберіть свою ідеальну карпатську пригоду з наших ретельно розроблених маршрутів
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-xl ${
                pkg.popular ? 'border-primary shadow-lg ring-2 ring-primary ring-offset-4' : 'border-border'
              }`}
            >
              {pkg.popular && (
                <div className="absolute right-0 top-6 rounded-l-full bg-primary px-4 py-1.5 text-sm text-primary-foreground">
                  Найпопулярніший
                </div>
              )}

              <div className="p-8">
                <div className="mb-4 inline-block rounded-full bg-muted px-4 py-1.5 text-sm text-muted-foreground">
                  {pkg.difficulty}
                </div>

                <h3 className="mb-4 text-3xl text-foreground">
                  {pkg.name}
                </h3>

                <div className="mb-6 space-y-3 border-b border-border pb-6">
                  <div className="flex items-center gap-3 text-foreground">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Тривалість: <strong>{pkg.duration}</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Banknote className="h-5 w-5 text-primary" />
                    <span>Ціна: від <strong>{pkg.price} грн</strong> за джип</span>
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:+380123456789"
                  className={`flex w-full items-center justify-center gap-2 rounded-lg py-4 transition-all ${
                    pkg.popular
                      ? 'bg-[#c4926b] text-white shadow-md hover:bg-[#b38357] hover:shadow-lg'
                      : 'border-2 border-gray-900 bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  <span className="font-medium">Замовити тур</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
