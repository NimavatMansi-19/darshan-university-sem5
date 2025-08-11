import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { url: 'https://images.unsplash.com/photo-1517646458010-ea6bd9f4a5d5?q=80&w=1600&auto=format&fit=crop', title: 'Book Courts Instantly' },
  { url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop', title: 'Discover Nearby Venues' },
  { url: 'https://images.unsplash.com/photo-1521417531039-98d3a4cd4a0d?q=80&w=1600&auto=format&fit=crop', title: 'Play Your Favorite Sports' },
];

export default function HeroCarousel() {
  return (
    <div style={{ borderRadius: 16, overflow: 'hidden' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop
        style={{ height: 320 }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{
                height: 320,
                backgroundImage: `url(${img.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.55))',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: 24,
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: 0.5,
                }}
              >
                {img.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}