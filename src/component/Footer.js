import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navigate_Context from '../Context/Navigate_Context';


import logo from "./images/Sahas_logo-removebg-preview.png"

export default function Footer({dbpath}) {
    const{handalaboutclick, setAbout, about,navi, navabout,ids, setIds} = useContext(Navigate_Context);

    const doabout = () => {
        handalaboutclick();
        setIds("aboutid");
    }
    const doTrainers = () => {
        handalaboutclick();
        setIds("coaches");
    }
    const doGallery = () => {
        handalaboutclick();
        setIds("gallery");
    }




useEffect(()=> {
   
    if(navi){
        setAbout(true);
    }
},[navi])



  return (
    <>
        <div class="container-fluid bg-dark text-secondary px-5 ">
        <div class="row gx-5">
            <div class="col-lg-8 col-md-6">
                <div class="row gx-5">
                    <div class="col-lg-4 col-md-12 pt-5 mb-5">
                        <h4 class="text-uppercase text-light mb-4">Get In Touch</h4>
                        <div class="d-flex mb-2">
                            <i class="bi bi-geo-alt text-primary me-2"></i>
                            {/* <p class="mb-0">Dadaji Nagar, Near Podar International School, <br></br> Kh No. 179, Mouza Welhari, Besa, Nagpur - 440027 </p> */}
                            <p class="mb-0">435C+H5X, Chatrapati Square, Chatrapati Nagar<br></br> Nagpur, Maharashtra 440015, India.</p>
                        </div>
                        <div class="d-flex mb-2">
                            <i class="bi bi-envelope-open text-primary me-2"></i>
                            <p class="mb-0">sahascricketclub@gmail.com</p>
                        </div>
                        <div class="d-flex mb-2">
                            <a href="tel:8451968111" target='_blank'><i class="bi bi-telephone text-primary me-2"></i></a>
                            <p class="mb-0">+91 8451968111</p>
                        </div>
                        <div class="d-flex mt-4">
                            <a class="btn btn-primary btn-square rounded-circle me-2" href="#"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-primary btn-square rounded-circle me-2" href="#"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-primary btn-square rounded-circle me-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-primary btn-square rounded-circle" href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                        <h4 class="text-uppercase text-light mb-4">Quick Links</h4>
                        <div class="d-flex flex-column justify-content-start">
                            <Link to={'/'} class="text-secondary mb-2"  ><i class="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                            <Link to={'/AboutUs'} class="text-secondary mb-2"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                            <Link to={'/ContactUs'} class="text-secondary mb-2"  ><i class="bi bi-arrow-right text-primary me-2"></i>Contact us</Link>
                            <Link to={'/Gallery'} class="text-secondary mb-2" ><i class="bi bi-arrow-right text-primary me-2"></i>Gallery</Link>
                            {/* <a class="text-secondary mb-2" ><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a> */}
                            <Link class="text-secondary" ><i class="bi bi-arrow-right text-primary me-2"></i>Schedule</Link>
                        </div>
                    </div>
                    {/* <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                        <h4 class="text-uppercase text-light mb-4">Popular Links</h4>
                        <div class="d-flex flex-column justify-content-start">
                        <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                            <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                            <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact us</a>
                            <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Gallery</a>
                            <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                            <a class="text-secondary" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Schedule</a>
                        </div>
                    </div> */}
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-5">
                    {/* <img src={logo} alt="logo" width={400} height={400}/> */}
                    <h4 class="text-uppercase text-white mb-4">Newsletter</h4>
                    <h6 class="text-uppercase text-white">Subscribe Our Newsletter</h6>
                    <p class="text-light">Subscribe to our newsletter to get latest updates about our club</p>
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="form-control border-white p-3" placeholder="Your Email"/>
                            <button class="btn btn-dark">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid py-4 py-lg-0 px-5 bg-secondary" >
        <div class="row gx-5">
            <div class="col-lg-8">
                <div class="py-lg-4 text-center">
                    <p class="text-dark mb-0">&copy; Sahas Cricket Club. All Rights Reserved.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="py-lg-4 text-center credit">
                    <p class="text-dark mb-0">Designed by <a class="text-dark fw-bold" href="">Royals Webtech Pvt. Ltd.</a></p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
