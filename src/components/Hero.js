import React from 'react';

function Hero() {
  return (
    <section className='hero'>
        <img src={require ('../images/hero-image.png')} className='hero--photo' />
        <h1 className='hero--header'>Online Expriences</h1>
        <p className='hero--text'>Join unique interactive activities let by one-of-a-kind hosts-all without leaving home.</p>
    </section>
  );
}

export default Hero;
