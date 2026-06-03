import Masonry from 'react-responsive-masonry';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1770086191328-e7c3f11b0a59?w=800',
    alt: 'Джип їде по бездоріжжю в Карпатах з бризками бруду'
  },
  {
    url: 'https://images.unsplash.com/photo-1762806354268-7ed08941d66e?w=800',
    alt: 'Позашляховик на вершині гірського хребта з панорамним видом'
  },
  {
    url: 'https://images.unsplash.com/photo-1770950283391-fb05fadd6a36?w=800',
    alt: 'Група туристів посміхається біля джипа на тлі Карпатських гір'
  },
  {
    url: 'https://images.unsplash.com/photo-1771607068090-d01570a7a81c?w=800',
    alt: 'Колона джипів їде лісовою стежкою серед зелених смерек'
  },
  {
    url: 'https://images.unsplash.com/photo-1772289934881-182ad9578f8c?w=800',
    alt: 'Екстремальна переправа через гірську річку на позашляховику'
  },
  {
    url: 'https://images.unsplash.com/photo-1770441669647-d74b08b823fe?w=800',
    alt: 'Щасливі туристи фотографуються на вершині гори біля джипів'
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl text-foreground">
            Фотогалерея
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Емоції, драйв та незабутні моменти з наших джип-турів по Карпатах
          </p>
        </div>

        <Masonry columnsCount={3} gutter="1.5rem">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-xl"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </Masonry>

        <div className="mt-12 text-center">
          <a
            href="tel:+380123456789"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#c4926b] px-8 py-4 text-lg text-white shadow-lg transition-all hover:bg-[#b38357] hover:shadow-xl"
          >
            <span className="font-medium">Забронювати тур зараз</span>
          </a>
        </div>
      </div>
    </section>
  );
}
