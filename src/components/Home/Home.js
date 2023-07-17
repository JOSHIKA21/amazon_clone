import { useEffect } from "react";
import "./Home.css";
import Products from "../Products/Products";
const Home=()=>{
    useEffect(()=>Slider(0),[]);
    return(
        <>
        <div className="home">
            <div className="homeContainer">
                <div className="homeSliderContainer">
                    <div className="homeSlide">
                        <img className="homeImg" src="https://m.media-amazon.com/images/S/aplus-media/vc/342b936a-69f1-4e59-89ba-7ddb98c1acda.jpg" alt=""/>
                    </div>
                    <div className="homeSlide">
                        <img className="homeImg" src="https://cdn.shopify.com/s/files/1/1780/7915/files/Thermaltake_Level_20_RGB_Titanium_Gaming_Keyboard_From_The_Peripheral_Store_Banner_01.jpg?v=1598266526" alt=""/>
                    </div>
                    <div className="homeSlide">
                        <img className="homeImg" src="https://cdn.shopify.com/s/files/1/1780/7915/files/Game_Monitor_6a7a1deb-2d61-4307-99ac-f8c5a18d298f.jpg?8000210842524768871" alt=""/>
                    </div>
                    <div className="homeSlide">
                        <img className="homeImg" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
                    </div>
                </div>

                <div className="HomeRow">
                    <Products title="FitBit Watch" price={2000} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
                    <Products title="New Apple iPad Pro (12.9-inch, Wi-Fi,128GB) - Silver" price={49000} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
                    <Products title="The Lean Startup" price={1000} image="https://m.media-amazon.com/images/I/41FYkVPzrIL.jpg"/>                   
                </div>
                <div className="HomeRow">
                    <Products title="Easy Coding" price={1400} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_Sy400_.jpg"/>
                    <Products title="Apple Watch Series 3(GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band" price={200} image="https://images-na.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"/>
                    <Products title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={3000} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>                 
                </div>
                <div className="HomeRow">
                    <Products title="Samsung Gaming Monitor - Easy Coding Tutorial" price={200} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
                    <Products title="Samsung Gaming Monitor - Easy Coding Tutorial" price={200} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"/>
                </div>
                 <div className="HomeRow">
                    <Products title="New Apple iPad Pro (12.9-inch, Wi-Fi,128GB) - Silver" price={49000} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
                    <Products title="Easy Coding" price={1400} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_Sy400_.jpg"/>
                    <Products title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={3000} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"/>                 
                </div>
            </div>
        </div>
        </>
    );
};
function Slider(Counter){
    const Slides = document.querySelectorAll(".homeImg")
    Slides.forEach((slide,index)=>{
        if(index!==Counter){
            slide.style.visibility=`hidden`;
            slide.classList.add(`image-${index}`);

        }
    })
    moveCarousal(Counter,Slides,Slides.length)
}
function moveCarousal(Counter, Slides, len){
    if(Slides){
        if(Counter>=len-1)Counter=0;
        else Counter+=1;
        Slides.forEach((slide,index)=>{
            if(index===Counter){
                slide.style.visibility=`visible`;
            }else{
                slide.style.visibility=`hidden`;
            }
        });
    }
    setTimeout(()=>{
        moveCarousal(Counter,Slides,len);
    },4000);

}
export default Home;