import React from "react";
import { 
    useState, 
    useEffect 
} from "react";
import { 
    BsChevronCompactLeft, 
    BsChevronCompactRight 
} from "react-icons/bs";

function Slider() {
  const slides = [
    {
      url: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/vbs_bulidingpic.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:656",
    },
    {
      url: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.42.17%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:870",
    },
    {
      url: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/31fd881b-32f5-4a3c-b953-1b6b002cf881.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:870",
    },
    {
      url: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.42.18%20PM.jpeg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1160,h:580",
    },
    {
      url: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.25.46%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:870",
    },
    {
      url: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/25d832b5-e817-429c-a9d9-f723d738fde7.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:870",
    },
    {
      url: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/e8c22d59-d752-4874-b627-9caddadc36fc.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:653",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); 
    return () => clearInterval(interval); 
  }, [currentIndex]); 

  return (
    <div className="max-w-[2000px] h-[500px] w-full m-auto py-6 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>

      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
}

export default Slider;
