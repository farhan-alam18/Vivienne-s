import React from 'react';
import './Collections.css'

const Collections = () => {
    const images = [
        { imgSrc: '../../../Content/Homepage/Image-178.png', text: "Luna Reflection Earring" },
        { imgSrc: '../../../Content/Homepage/Image-179.png', text: "Turquoise Teardrop Lariat" },
        { imgSrc: '../../../Content/Homepage/Image-180.png', text: "Oceanic Pearl Medley Necklace" },
        { imgSrc: '../../../Content/Homepage/Image-181.png', text: "Rosaline Braided Bloom Ring" },
        { imgSrc: '../../../Content/Homepage/Image-182.png', text: "Silken Twist Earring" },
        { imgSrc: '../../../Content/Homepage/Image-183.png', text: "Diamond Oval Elegance Ring" },
        { imgSrc: '../../../Content/Homepage/Image-184.png', text: "Saffron Square Majesty Ring" },
        { imgSrc: '../../../Content/Homepage/Image-185.png', text: "Cerulean Leaflet Earclip" },
        { imgSrc: '../../../Content/Homepage/Image-186.png', text: "Gilded Grace Piercing" }
    ];
    


    return (
        <div className="collections">
            <p>Our Collections</p>
            <div className="grid-container">
                {images.map((image, index) => (
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

export default Collections