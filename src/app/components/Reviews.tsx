import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Анна Шмідт',
    location: 'Німеччина',
    rating: 5,
    text: 'Незабутня подорож крізь незайману природу. Гід був дуже обізнаний, а краєвиди абсолютно вражаючі. Високопрофесійний сервіс.',
    image: 'https://i.pravatar.cc/150?img=45'
  },
  {
    name: 'Жан-П\'єр Дюбуа',
    location: 'Франція',
    rating: 5,
    text: 'Ідеальне поєднання пригод та комфорту. Карпатські пейзажі приголомшливі, а увага до деталей вражала протягом усього туру.',
    image: 'https://i.pravatar.cc/150?img=12'
  },
  {
    name: 'Катерина Коваль',
    location: 'Україна',
    rating: 5,
    text: 'Як місцева жителька, я думала, що добре знаю Карпати. Цей тур показав мені перспективи, які я ніколи раніше не бачила. Абсолютно варто того!',
    image: 'https://i.pravatar.cc/150?img=33'
  }
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl text-foreground">
            Відгуки наших клієнтів
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Реальні емоції від тих, хто вже побував у наших турах
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-10 md:p-16 shadow-sm">
            <Quote className="absolute right-8 top-8 h-20 w-20 text-primary/10" />

            <div className="relative z-10">
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>

              <p className="mb-10 text-center text-xl leading-relaxed text-foreground md:text-2xl">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-lg text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prevReview}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Попередній відгук"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-border'
                  }`}
                  aria-label={`Перейти до відгуку ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextReview}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:shadow-lg"
              aria-label="Наступний відгук"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-4">
          <div className="rounded-2xl border border-border bg-gray-50 p-8 text-center">
            <div className="mb-2 text-5xl text-primary">500+</div>
            <div className="text-muted-foreground">Задоволених гостей</div>
          </div>
          <div className="rounded-2xl border border-border bg-gray-50 p-8 text-center">
            <div className="mb-2 text-5xl text-primary">4.9</div>
            <div className="text-muted-foreground">Середній рейтинг</div>
          </div>
          <div className="rounded-2xl border border-border bg-gray-50 p-8 text-center">
            <div className="mb-2 text-5xl text-primary">8+</div>
            <div className="text-muted-foreground">Років досвіду</div>
          </div>
          <div className="rounded-2xl border border-border bg-gray-50 p-8 text-center">
            <div className="mb-2 text-5xl text-primary">100%</div>
            <div className="text-muted-foreground">Безпека</div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="tel:+380123456789"
            className="inline-flex items-center gap-2 rounded-lg bg-[#c4926b] px-8 py-4 text-lg text-white shadow-lg transition-all hover:bg-[#b38357] hover:shadow-xl"
          >
            <span className="font-medium">Приєднуйтесь до задоволених клієнтів</span>
          </a>
        </div>
      </div>
    </section>
  );
}
