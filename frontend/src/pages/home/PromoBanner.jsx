import React from 'react'

const PromoBanner = () => {
  return (
    <section className='section__container banner__container'>
        <div className="banner__card">
            <span><i className='ri-truck-line'></i></span>
            <h4>Free Delivery</h4>
            <p>Offers convenience and the ability to shop from anywhere, anytime.</p>
        </div>
        <div className="banner__card">
            <span><i className='ri-money-dollar-circle-line'></i></span>
            <h4>Value for your Money</h4>
            <p>Craftsmanship that delivers exceptional value without compromising on quality.</p>
        </div>
        <div className="banner__card">
            <span><i className='ri-user-voice-fill'></i></span>
            <h4>Customer Support</h4>
            <p>Offers customer support to assist customers with querries and issues.</p>
        </div>
    </section>
  )
}

export default PromoBanner