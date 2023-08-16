import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";



function Footer() {
    return (
        <div>
            <div className="footer">

                <div className="footers-menu">
                    <img className='logo' src='https://i.fbcd.co/products/resized/resized-750-500/sf-fs-modern-logo-designs-2-f6a94cb89c415dc12a346af7ca2e5d2e5077f0687cdc5184030fd397aa46b777.jpg' /> <p><br />  Store <br /> <img src="https://www.shutterstock.com/image-photo/kiev-ukraine-april-07-2019-260nw-1369979807.jpg" className="footer-logos" /></p>
                    <div>  <h5 className="titles-of-footer">About Company</h5> About Us <Link className="footerLinks" to={'/news'}> <br /> News</Link> </div>
                    <div>  <h5 className="titles-of-footer">Wholesale trade</h5>Price List <br /> Services<br />Wholesale Promotions <br />Online sale </div>
                    <div>    <h5 className="titles-of-footer">Information</h5> FAQ</div>
                    <div>   <h5 className="titles-of-footer">Usful Links</h5>How To Order Online</div>
                    <div> <h5 className="titles-of-footer">Connection</h5> </div>
                    <div>  <h6 className="phone-number"> +374 11700500</h6><br /> SF.@store.am <br />  <button className="callBtn">Order a Calll</button></div>
                </div>



            </div>
            <div className="footer-copy">
                @2023 copy right
            </div>
        </div>
    )
}

export default Footer;