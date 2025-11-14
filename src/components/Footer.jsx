import { X, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {

    return (
        <footer className="global-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4 className="footer-title">Our Social Media</h4>
                    <ul className="social-links">
                        <li>
                            <a href="https://x.com/rrainfo" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon twitter">
                                    <X size={14} />
                                </span>
                                <span className="social-text">rrainfo</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/RwandaRevenueAuthority" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon facebook">
                                    <Facebook size={14} />
                                </span>
                                <span className="social-text">Rwanda Revenue Authority</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/rwandarevenue/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon instagram">
                                    <Instagram size={14} />
                                </span>
                                <span className="social-text">Rwandarevenue</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@rwandarevenueauthority6148" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon youtube">
                                    <Youtube size={14} />
                                </span>
                                <span className="social-text">Rwanda Revenue Authority</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Help & Contacts</h4>
                    <ul className="footer-menu">
                        <li>
                            <ArrowRight size={14} className="arrow-icon" />
                            <a href="tel:3004" className="footer-link">3004 (Local Calls)</a>
                        </li>
                        <li>
                            <ArrowRight size={14} className="arrow-icon" />
                            <a href="tel:+250788185500" className="footer-link">+250 (0) 788 185 500 (International calls)</a>
                        </li>
                        <li>
                            <ArrowRight size={14} className="arrow-icon" />
                            <a href="https://ecms.rra.gov.rw/home?lang=en" target="_blank" rel="noopener noreferrer" className="footer-link">Send us a Letter</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-copyright">
                <p>© Rwanda Revenue Authority 2025</p>
            </div>
        </footer>
    );
};

export default Footer;
