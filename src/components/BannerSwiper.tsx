import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface Banner {
	id: number;
	imageUrl: string;
	link: string;
}

interface BannerSwiperProps {
	banners: Banner[];
}

const BannerSwiper: React.FC<BannerSwiperProps> = ({ banners }) => {
	const swiperRef = useRef<SwiperType | null>(null);

	return (
		<div className="pt-3 px-3 mb-2">
			<div className="relative rounded-2xl overflow-hidden shadow-2xl">
				<Swiper
					onSwiper={(swiper) => (swiperRef.current = swiper)}
					spaceBetween={0}
					slidesPerView={1}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					loop={banners.length > 1}
					modules={[Pagination, Autoplay]}
					className="banner-swiper"
				>
					{banners.map((banner) => (
						<SwiperSlide key={banner.id}>
							<div className="relative">
								<img
									className="banner-image w-full"
									src={banner.imageUrl}
									alt={`Promotional banner ${banner.id}`}
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default BannerSwiper;
