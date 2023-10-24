import React from 'react';
import '../Landing Page/Landing.css';
import images from '../../../Image_Imports/imageImports-collections';

const Landing = () => {
    return (
        <>
            <div className="landing">
                <p className="heading">Sparkle & Shine :  <br />Exquisite Elegance <br />Unveiled <br /><button>Shop Now</button></p>
                <div className="landing-image">
                    <img className="img1" src={images.image169} alt="" />
                    <img className='img2' src={images.image170} alt='' />
                </div>
            </div>
            <div className="button">
                <button>Shop Now</button>
            </div>
        </>
    )
}

export default Landing
