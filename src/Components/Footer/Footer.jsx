import React from 'react';
import './Footer.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-heading">Vivienne's</div>
                <div className="footer-text">

                    <div className="footer-text-1">
                        <a href="">Shop</a>
                        <a href="">About</a>
                        <a href="">Policies</a>
                        <a href="">Contact</a>
                        <a href="">Collections</a>
                    </div>
                    <div className="footer-text-2">
                        <a href="">Discover</a>
                        <a href="">Account</a>
                        <a href="">Community</a>
                        <a href="">Information</a>
                        <a href="">Customer Care</a>
                    </div>

                </div>
                <div className="footer-newsletter">
                    <p className='newsletter-heading'>Subscribe to our newsletter</p>
                    <p className='newsletter-text'>For product announcements and exclusive insights</p>
                    <div className="newsletter-form">
                        <div class="input-container">
                            <EmailOutlinedIcon style={{ color: 'f5f5f5' }} className='input-icon' />
                            <input type="text" placeholder="Input your mail" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer