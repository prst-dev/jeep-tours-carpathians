import { Phone, CheckCircle } from 'lucide-react';

export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-primary to-[#1a3a1a] py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl md:text-5xl text-white">
            Готові до незабутньої пригоди?
          </h2>
          <p className="mb-10 text-lg text-white/90 md:text-xl">
            Зателефонуйте зараз та забронюйте свій тур. Наші менеджери допоможуть підібрати ідеальний маршрут саме для вас
          </p>

          <div className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="h-6 w-6 text-[#c4926b]" />
              <span>Безкоштовна консультація</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="h-6 w-6 text-[#c4926b]" />
              <span>Гнучкий графік</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <CheckCircle className="h-6 w-6 text-[#c4926b]" />
              <span>Гарантія якості</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+380123456789"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#c4926b] px-10 py-5 text-xl text-white shadow-2xl transition-all hover:bg-[#b38357] hover:shadow-3xl"
            >
              <Phone className="h-7 w-7" />
              <div className="text-left">
                <div className="text-xs text-white/90">Подзвоніть зараз</div>
                <div className="font-bold">+380 123 456 789</div>
              </div>
            </a>
          </div>

          <p className="mt-6 text-sm text-white/70">
            Працюємо щодня з 8:00 до 20:00. Відповімо на всі ваші питання!
          </p>
        </div>
      </div>
    </section>
  );
}
