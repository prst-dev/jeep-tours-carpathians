import { Eye, MapPin, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Панорамні види',
    description: 'Захоплюючі краєвиди карпатських вершин, незайманих долин та безкрайніх лісів'
  },
  {
    icon: MapPin,
    title: 'Дика природа',
    description: 'Відчуйте недоторкану природу, кришталеві струмки та автентичні гірські ландшафти'
  },
  {
    icon: Shield,
    title: 'Досвідчені гіди',
    description: 'Професійні водії з глибоким знанням місцевості та багаторічним досвідом гірських маршрутів'
  },
  {
    icon: Users,
    title: 'Преміум-сервіс',
    description: 'Комфортні автомобілі, невеликі групи та індивідуальна увага до кожної деталі'
  }
];

export function Experience() {
  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl text-foreground">
            Чому обирають нас
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Професійний сервіс, безпека та незабутні емоції на кожному маршруті
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-6 inline-flex rounded-xl bg-muted p-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl text-foreground">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl">
          <div className="grid md:grid-cols-2">
            <div
              className="h-80 bg-cover bg-center md:h-auto"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1770950283391-fb05fadd6a36?w=800')`
              }}
            />
            <div className="bg-white p-12 lg:p-16">
              <h3 className="mb-6 text-3xl text-foreground">
                Незабутня карпатська пригода
              </h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Подорожуйте крізь вікові ліси, долайте гірські струмки та відкривайте приховані оглядові майданчики, які бачили небагато мандрівників. Наші тури поєднують хвилювання позашляхової пригоди зі спокоєм природи.
              </p>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                Кожен маршрут розроблено так, щоб показати найкраще в Карпатах, забезпечуючи при цьому ваш комфорт та безпеку. Незалежно від того, чи шукаєте ви спокійні лісові стежки чи складний гірський рельєф, у нас є ідеальна подорож для вас.
              </p>
              <a
                href="tel:+380123456789"
                className="inline-flex items-center gap-2 rounded-lg bg-[#c4926b] px-6 py-3 text-white shadow-md transition-all hover:bg-[#b38357] hover:shadow-lg"
              >
                <span className="font-medium">Консультація по турам</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
