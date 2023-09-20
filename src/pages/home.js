import React from 'react';
import '../assets/styles/style.css';
import img1 from '../assets/images/install-duffle-tail-bag_1600x.jpg';
import imgs from '../assets/images/image';
const Home = ()=> {
    return (

        <div className="body1 col-lg-12">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} class="d-block w-100 img1" alt="..." />
                        <div class="carousel-caption d-none d-md-block text-body ">
                            <h4 class="fw-bold">
                                <span class="text-danger ">Discover</span> <span class="text-warning">terrains like never </span><span class="text-center text-warning ">before </span>
                            </h4>
                            <button type="button" class="subscribe">Subscribe</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={imgs.img1} class="d-block w-100 img1" alt="..." />
                        <div class="carousel-caption d-none d-md-block text-body fw-bold">
                            <h4 class="fw-bold"><span class="text-danger">4000+ Riders</span>
                                <span class="text-warning">350+ Trips</span>
                                10+ Destinations
                            </h4>
                            <button type="button" class="subscribe">Subscribe</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={imgs.img2} class="d-block w-100 img1" alt="..." />
                        <div class="carousel-caption d-none d-md-block fw-bold ">
                            <h4 class="fw-bold"><span class="text-danger ">Trans-Himalayan</span>
                                Motorcycle Tour</h4>
                            <button type="button" class="subscribe">Subscribe</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="container-fluid bg-dark mt-1">
                <div class="row justify-content-center">
                    <div class="col-lg-4 ">
                        <h1 class="mt-2 text-warning text-center"><i>LET'S TALK ABOUT</i></h1>
                        <h2 class="text-center text-danger mb-2">MOTORCYCLE ADVENTURE!!!</h2>
                    </div>
                </div>
            </div>
            <div class="container-fluid para1">
                <div class="row">
                    <div class="col-lg-12 para">
                        <p class="text-center">
                            Are you an Adventure Motorcycle traveler? looking for the best motorcycle touring company in India that suits
                            your riding style, preferences, or a perfect family vacation on a motorcycle

                            then don’t hesitate to contact us.</p>
                        <p class="text-center">
                            We are happy to share our travel experience with you so that you can decide what motorcycles will suit
                            according to your riding pattern or which destinations will impress you.</p>
                        <p class="text-center">
                            All queries will be answered personally by the Founder himself, so kindly allow us a turnaround time

                            of 24 hours to get back to your query with a perfect suggestion from an expert. </p>
                        <p class="text-center">
                            Looking forward to riding with you on the road less traveled. </p>
                    </div>
                </div>
            </div>
            <div class="container-fluid bgcolor pb-5">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="text-center titles text-warning">Contact Us</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 col-sm-6 col-md-6 d-flex justify-content-center ">
                        <div class="form d-flex justify-content-center">
                            <form class="row  needs-validation" id="form" novalidate>
                                <div class="col-lg-6 col-sm-6 col-md-6">
                                    <label for="validationCustom01" class="form-label">First name</label>
                                    <input type="text" class="form-control" id="validationCustom01" name="Fname" required />
                                    <div class="invalid-feedback">
                                        Please Enter the Name.!
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-md-6">
                                    <label for="validationCustom02" class="form-label">Last name</label>
                                    <input type="text" class="form-control" id="validationCustom02" name="Lname" required />
                                    <div class="invalid-feedback">
                                        Please Enter the Name.!
                                    </div>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-md-12">
                                    <label for="validationCustom05" class="form-label">Phone</label>
                                    <input type="tel" class="form-control" id="validationCustom05" name="Phone" required />
                                    <div class="invalid-feedback">
                                        Please provide a valid Phone number.
                                    </div>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-md-12 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                        required name="Email" />
                                    <div class="invalid-feedback">
                                        Please Enter the Valid Email
                                    </div>
                                </div>
                                <div class=" col-lg-12 col-sm-12 col-md-12 mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required name="msg"></textarea>
                                    <div class="invalid-feedback">
                                        Please Enter the Message.
                                    </div>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-md-12 d-flex justify-content-center">
                                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="submit" type="submit">Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class=" col-6 col-lg-6 col-sm-6 col-md-6 d-flex justify-content-center  ">
                        <div class="side1 d-block justify-content-center" id="values">
                            <h2 class="text-warning text-center">Support Squad</h2>
                            <p class="text-center">Be it the support-vehicle driver or the RE-trained and certified mechanic, the first-rate skills and proficiency of our support-crew ensure that our tours run like a well-oiled machine. Some of our tour guides pitch in with supplementary skills like First-Aid, CPR, and Bushcraft, to handle any contingency. </p>
                            <p class="text-center">We will be happy to assist you with any of your queries related
                                to our adventure tours, rentals, or any other services, please contact us at</p>
                            <h6 class="text-primary text-center" style={{ cursor: 'pointer' }}>info@moto_ride.com / +91-9135551151</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;