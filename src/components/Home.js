import React, { useEffect } from 'react';
import Slider from './Slider';
import Poster from './poster';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home(){
    useEffect(() => {
        AOS.init();
      }, []);
    return(<>
        <Poster/>
        
        <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500"><Slider type="Science-Fiction"/></div>
        <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500"><Slider type="Drama"/></div>
        <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500"><Slider type="Thriller"/></div>
        <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500"><Slider type="Horror"/></div>
    </>);
}