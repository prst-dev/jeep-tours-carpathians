import { Phone } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(47, 62, 47, 0.3), rgba(47, 62, 47, 0.5)), url('https://images.unsplash.com/photo-1762806354268-7ed08941d66e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`
        }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="mb-4 inline-block rounded-lg border border-white/30 bg-white/95 px-5 py-2 backdrop-blur-sm">
          <span className="text-sm text-muted-foreground">Старт з Яремче, Татарова, Буковелю та Ворохти</span>
        </div>

        <h1 className="mb-6 max-w-5xl text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-2xl">
          Джип-тури в Карпатах: драйвові маршрути на позашляховиках
        </h1>

        <p className="mb-10 max-w-3xl text-lg md:text-xl text-white/95">
          Екстремальні пригоди, незабутні краєвиди та професійний супровід. Ідеально для сімей, компаній та любителів активного відпочинку
        </p>

        <a
          href="tel:+380123456789"
          className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#c4926b] px-8 py-4 text-lg shadow-xl transition-all hover:bg-[#b38357] hover:shadow-2xl"
        >
          <Phone className="h-6 w-6 text-white" />
          <div className="text-left">
            <div className="text-xs text-white/90">Подзвоніть зараз</div>
            <div className="font-medium text-white">+380 123 456 789</div>
          </div>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
