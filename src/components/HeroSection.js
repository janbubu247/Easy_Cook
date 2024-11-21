import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomImage from './CustomImage';

export default function HeroSection(){
    const navigate = useNavigate();
    const images = [
        "/img/gallery/img-1.jpg",
        "/img/gallery/img-2.jpg",
        "/img/gallery/img-3.jpg",
        "/img/gallery/img-4.jpg",
        "/img/gallery/img-5.jpg",
        "/img/gallery/img-6.jpg",
        "/img/gallery/img-7.jpg",
        "/img/gallery/img-8.jpg",
        "/img/gallery/img-10.jpg",
    ]
    const navigateToReceipt = ()=>{
        navigate('/EasyCook');
    }
    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">EasyCook is the application to find the delicious and healthy food recipies. You can also find the nearby grocery stores around you.</p>
                <button className="btn" onClick={navigateToReceipt}> explore now</button>
            </div>
            <div className="col gallery">
                {images.map((src, index)=>(
                    <CustomImage key={index} imgSrc={src} pt={"90%"}/>
                )) }
            </div>
        </div>
    )
}