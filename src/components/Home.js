import React from 'react';
import Slider from './Slider';
import Poster from './poster';
export default function Home(){

    return(<>
        <Poster/>
        <Slider type="Science-Fiction"/>
        <Slider type="Science-Fiction"/>
        <Slider type="Science-Fiction"/>
        <Slider type="Science-Fiction"/>
    </>);
}