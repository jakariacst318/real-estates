
import images1 from "../../assets/images-1.jpg"
import images2 from "../../assets/images-2.jpg"
import images3 from "../../assets/images-3.jpg"
import images4 from "../../assets/images-4.jpg"


const Banner = () => {
    return (
        <div className="relative mb-16">
            <div className="carousel w-full h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={images1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={images2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={images3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={images4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-1/3 left-[130px] text-white text-center space-y-3">
                <h2 className="text-5xl font-semibold">BEST PLACE TO FIND HOME</h2>
                <p className="text-xl">Allow us to guide you through the innovative stress free approach in finding your dream Properties.</p>
                <button className="btn btn-primary uppercase"> get started now</button>
                <button className="btn btn-outline btn-primary uppercase ms-5">learn more</button>
            </div>
        </div>
    );
};

export default Banner;