import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion'

const TestimonialData = [
  {
    id: 1,
    name: "Sophia Williams",
    text: "Ella Mia London is my go-to spot for coffee and brunch. The ambiance is beautiful, and every cup feels thoughtfully crafted. It’s the perfect place to relax and unwind.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "James Carter",
    text: "From the interiors to the flavors, everything feels premium. The coffee is rich, the desserts are irresistible, and the service is always warm and welcoming." ,
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Amelia Brown",
    text: "I love how stylish yet cozy this café feels. The drinks are unique, and the food presentation is stunning. Every visit feels like a little escape to London.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Isabella Turner",
    text: "A truly beautiful café experience. The flavors are balanced, the atmosphere is calm, and the staff make you feel at home. It’s my favorite café in the city.",
    img: "https://picsum.photos/105/105"
  },
  {
    id: 5,
    name: "Oliver Grant",
    text: "Ella Mia London delivers quality in every detail. Amazing coffee, delicious treats, and a vibe that makes you want to stay longer. Highly recommended.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow:3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div id="testimonials" className="py-20 bg-amber-100">
      <div className="w-full max-w-7xl mx-auto px-3">
        {/* header section */}
        <div className="mb-10">
          <h1 className="text-center text-amber-900 text-4xl font-bold font-cursive">
            Testimonials
          </h1>
        </div>
        {/* Testimonials cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-amber-900/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-amber-900">{data.text}</p>
                      <h1 className="text-xl font-bold text-amber-900 font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-amber-900/60 text-9xl font-serif absolute top-0 right-0">
                    "
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;