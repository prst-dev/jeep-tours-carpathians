import { Mail, MapPin, Phone, Instagram, Send, Facebook, Clock, Mountain } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a3a1a] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <Mountain className="h-8 w-8 text-[#c4926b]" />
              <span className="text-2xl">Карпатські Тури</span>
            </div>
            <p className="mb-6 leading-relaxed text-white/80">
              Преміум позашляхові пригоди серед приголомшливих Українських Карпатських гір з 2018 року.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-all hover:bg-[#c4926b]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-all hover:bg-[#c4926b]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-all hover:bg-[#c4926b]"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg">
              Контакти
            </h4>
            <div className="space-y-4 text-white/80">
              <a
                href="tel:+380123456789"
                className="flex items-center gap-3 transition-colors hover:text-[#c4926b]"
              >
                <Phone className="h-5 w-5" />
                <span>+380 123 456 789</span>
              </a>
              <a
                href="mailto:info@carpathian-tours.ua"
                className="flex items-center gap-3 transition-colors hover:text-[#c4926b]"
              >
                <Mail className="h-5 w-5" />
                <span>info@carpathian-tours.ua</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg">
              Адреса та графік
            </h4>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0" />
                <div>
                  <p>вул. Гірська, 12</p>
                  <p>с. Ворохта</p>
                  <p>Івано-Франківська обл., 78593</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 shrink-0" />
                <div>
                  <p>Понеділок - Неділя</p>
                  <p className="text-[#c4926b]">8:00 - 20:00</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg">
              Офіційна інформація
            </h4>
            <div className="space-y-3">
              <p className="text-sm text-white/80">
                ФОП Іваненко М.В.
                <br />
                ЄДРПОУ: 1234567890
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href="#privacy-policy"
                  className="text-white/60 underline transition-colors hover:text-[#c4926b]"
                >
                  Політика конфіденційності
                </a>
                <a
                  href="#terms-of-use"
                  className="text-white/60 underline transition-colors hover:text-[#c4926b]"
                >
                  Правила користування сайтом
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-white/60">
              &copy; 2026 Карпатські Тури. Усі права захищені.
            </p>
            <a
              href="tel:+380123456789"
              className="inline-flex items-center gap-2 rounded-lg bg-[#c4926b] px-6 py-3 text-white shadow-lg transition-all hover:bg-[#b38357] hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">Замовити дзвінок</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
