import React from 'react';
import './Collections.css';
import images from '../../../Image_Imports/imageImports-collections';
 

const Collections = () => {
    const Images = [
        { imgSrc: images.image178, text: "Luna Reflection Earring" },
        { imgSrc: images.image179, text: "Turquoise Teardrop Lariat" },
        { imgSrc: images.image180, text: "Oceanic Pearl Medley Necklace" },
        { imgSrc: images.image181, text: "Rosaline Braided Bloom Ring" },
        { imgSrc: images.image182, text: "Silken Twist Earring" },
        { imgSrc: images.image183, text: "Diamond Oval Elegance Ring" },
        { imgSrc: images.image184, text: "Saffron Square Majesty Ring" },
        { imgSrc: images.image185, text: "Cerulean Leaflet Earclip" },
        { imgSrc: images.image186, text: "Gilded Grace Piercing" }
    ];
    
    return (
        <div className="collections">
            <p>Our Collections</p>
            <div className="grid-container">
                {Images.map((image, index) => (
                    <div key={index} className="grid-item">
                        <div className="image-container">
                            <img src={image.imgSrc} alt="User" />
                            <div className="image-text">{image.text}</div>
                        </div>
                    </div>
                ))}
            </div>
            <button>Shop Now</button>
        </div>
    );
}

export default Collections;