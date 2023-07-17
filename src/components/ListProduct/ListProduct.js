import React from 'react'
import Products from '../Products/Products'
const ListProduct = () => {
  return (
    <div>
      <div className='ListProduct'>
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
  )
}

export default ListProduct
