import React from 'react';
import { Link } from 'react-router';
import { BiSolidFileFind } from "react-icons/bi";

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-gray-300 text-base-content p-10">
                <aside>
                    <svg
                        width="50"
                        height="50"
                      
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current -mb-6 ml-4">
                          < BiSolidFileFind />
                    </svg>
                  
                    <p>
                        Roommate Finder Websites
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link to='/branding' className="link link-hover">Branding</Link>
                    <Link to='/design' className="link link-hover">Design</Link>
                    <Link to='/marketing' className="link link-hover">Marketing</Link>
                    
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to='/about' className="link link-hover">About us</Link>
                    <Link to='/contact' className="link link-hover">Contact</Link>
                    <Link to='/job' className="link link-hover">Jobs</Link>
                    {/* <Link to='/press' className="link link-hover">Press kit</Link> */}
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link to='/terms' className="link link-hover">Terms of use</Link>
                    <Link to='/privacy' className="link link-hover">Privacy policy</Link>
                    
                </nav>
            </footer>
        </div>
    );
};

export default Footer;