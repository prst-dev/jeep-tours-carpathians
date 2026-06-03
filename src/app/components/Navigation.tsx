import { useState } from 'react';
import { Phone, Menu, X, Mountain } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Mountain className="h-8 w-8 text-primary" />
            <span className="text-2xl text-primary">Карпатські Тури</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground transition-colors hover:text-primary"
            >
              Про нас
            </button>
            <button
              onClick={() => scrollToSection('tours')}
              className="text-foreground transition-colors hover:text-primary"
            >
              Маршрути
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-foreground transition-colors hover:text-primary"
            >
              Галерея
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-foreground transition-colors hover:text-primary"
            >
              Відгуки
            </button>
          </div>

          <a
            href="tel:+380123456789"
            className="hidden items-center gap-2 rounded-lg bg-[#c4926b] px-6 py-3 text-white shadow-md transition-all hover:bg-[#b38357] hover:shadow-lg md:flex"
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium">+380 123 456 789</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground transition-colors hover:text-primary"
              >
                Про нас
              </button>
              <button
                onClick={() => scrollToSection('tours')}
                className="text-left text-foreground transition-colors hover:text-primary"
              >
                Маршрути
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-foreground transition-colors hover:text-primary"
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-left text-foreground transition-colors hover:text-primary"
              >
                Відгуки
              </button>
              <a
                href="tel:+380123456789"
                className="flex items-center gap-2 rounded-lg bg-[#c4926b] px-6 py-3 text-white shadow-md"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">+380 123 456 789</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
