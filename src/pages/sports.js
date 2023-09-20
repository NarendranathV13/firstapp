import React from 'react';
import '../assets/styles/style.css';
import imgs from '../assets/images/image';
import Footerimg from '../components/Footerimg';
import Willmount from '../components/WillmountClass';
import GetderivedState from '../components/GetderivedState';
import UpdategetDerived from '../components/UpdategetDerived';
import Shouldupdate from '../components/Shouldupdate';
import Snapshot from '../components/Snapshot';
import Willunmount from '../components/Willunmount';
class Sports extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "River Rafting or White Water Rafting",
            paragraph: "River rafting or white water rafting is an adventure sport which involves a group of people travelling in a raft down a rocky high speed river. If you like to challenge nature as much as you like to cherish its beauty, then this is the sport for you. There are increasing degrees of rough water, measured in grades, which a considered reasonable for river rafting. Higher the grade number, higher the roughness of the course. Different rivers and different locations in India offer  different grades of river rafting. With numerous rivers flowing through wide range of mountainous and hilly terrains, rafting in India can be a memory to cherish for.",
            imgz: imgs.sprt2,
            shouldcomp: true,
            deletecomp: true
        };
    }
    delComp = () =>{
        this.setState({deletecomp:false})
    }
    changeContent = () => {
        this.setState({ title: "Paragliding", paragraph: "Paragliding can give you the feel of flying through air like a bird. Paragliding is safe and easy and considered to be the sport for the initial adventurist. Paragliding in India is typically performed using a light-weight, foot-launched aircraft that has no rigid structure. This sport requires very less training and can be enjoyed by people of all age group. The best part about it is that the control lies completely in the hands of the individual flying the glider. He can stop the take-off at any moment he wants to and thus the sport gives you total freedom.", imgz: imgs.sprt3 })
    }
    shouldRender = () =>{
        console.log(this.state.shouldcomp)
        this.setState({shouldcomp:false})
    }
    render() {
        let unmountComp;
        if(this.state.deletecomp){
            unmountComp = <Willunmount />;
        };
        return (
            <>
                <div class="sport bg-secondary">
                    <div class="container-fluid">
                        <div class="row">
                            <img class='sprt1' src={imgs.sprt1} id="sprt1" />
                        </div>
                    </div>
                    <h2 class="text-center mt-2 mb-2">ComponentWillmount</h2>
                    <Willmount />
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <h2 class="text-danger text-center ">Moto_Ride Extreme Sports</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <p class="paragraph mt-2 mb-2">India offers such variety in terms of geographical terrains,
                                    climates,
                                    culture etc. that very few other countries in this world can compete with it. India has huge
                                    snowy
                                    mountains, fast rivers, rocky lands, deserts, clear lagoons, coral reefs, deep valleys, wide
                                    open
                                    seas and everything that an adventurist can ask for. Thus any adventure seeker from anywhere in
                                    this
                                    world can enjoy a wide variety adventure sports in India.</p>
                                <p class="mt-1 mb-2">Adventure seekers who like some extra adrenalin boost can also participate in
                                    various adventure sports in addition to the given itinerary during any of the trips. We provide
                                    you
                                    a variety of adventure sports options like River Rafting or White Water Rafting, Paragliding,
                                    Camping, Rapelling, Valley Crossing or River Crossing using Zip-line, Flying Fox, Horse Riding,
                                    Glacier Watch, Astro Observation or Star Gazing etc. Below you will find more details about
                                    these.
                                    You can opt for any of these adventure sports at an additional cost. Please note that these
                                    sports
                                    are subject to availbility during a particular tour. So, feel the trill while you ride.</p>
                            </div>
                        </div>
                        <hr></hr>
                        <h2 class="text-center mt-2 mb-2">GetderivedStatefromprops</h2>
                        <GetderivedState favcol="red" />
                        <UpdategetDerived favcol="green" />
                        <hr></hr>
                        <div class="row">
                            <div class="col-lg-12">
                                <h3 class="text-bg-warning p-4 rounded-5 text-center text-danger ">Our Adventure Sports offers</h3>
                            </div>
                        </div>
                        <div class="row mt-2 mb-2">
                            <div class="col-lg-12 mt-2 mb-3">
                                <div class="bg-light">
                                    <div class="row p-3">
                                        <div class="col-lg-4 ">
                                            <img src={this.state.imgz} alt="" />
                                        </div>
                                        <div class="col-lg-8">
                                            <h4 class="text-center text-warning">{this.state.title}</h4>
                                            <p>{this.state.paragraph}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <h2 class="text-center mt-2 mb-2">componentShouldupdate</h2>         
                        <Shouldupdate permission={this.state.shouldcomp} />
                            <div class="col-lg-12">
                            <button type="button" onClick={this.shouldRender} class="btn btn-warning mb-3">stop changing message</button>
                            </div>
                            <hr></hr>
                        <h2 class="text-center mt-2 mb-2">getSnapshot</h2>
                            <Snapshot />
                            <hr></hr>
                        <div class="row">
                            <div class="col-lg-12">
                                <button type="button" onClick={this.changeContent} class="btn btn-primary">change</button>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <h2 class="text-center mt-2 mb-2">willUNmount</h2>
                    <div class="row">
                        {unmountComp}
                    </div>
                    <div class="row">
                            <div class="col-lg-12">
                                <button type="button" onClick={this.delComp} class="btn btn-danger mt-2 mb-2">UNMOUNT</button>
                            </div>
                        </div>

                    <div class="container-fluid">
                        <div class="row">
                            <Footerimg heading={"Sports"} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Sports;