import React from 'react';
import '../Landing Page/Landing.css'

const Landing = () => {
    return (
        <>
            <div className="landing">
                <p className="heading">Sparkle & Shine :  <br />Exquisite Elegance <br />Unveiled <br /><button>Shop Now</button></p>
                <div className="landing-image">
                    <img className="img1" src="../../../Content/Homepage/Image-169.png" alt="" />
                    <img className='img2' src='../../../Content/Homepage/Image-170.png' alt='' />
                </div>
            </div>
            <div className="button">
                <button>Shop Now</button>
            </div>
        </>
    )
}

export default Landing
