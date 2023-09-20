import React, { PureComponent, useState } from 'react';
import '../assets/styles/style.css';
import location1 from '../assets/images/location1.jpg';
import camp1 from '../assets/images/camp1.jpg';
import camp2 from '../assets/images/camp2.jpg';
import camp3 from '../assets/images/camp3.jpg';
import Camps from '../components/Camp';
import Footerimg from '../components/Footerimg';
import Listli from '../components/Listli';
import Purecomponent1 from '../components/Purecomponent';
import Username1 from '../components/Sample1';
import Didupdate from '../components/Didupdate';
import Willupdate from '../components/Willupdate';
import Useeffect from '../components/Useeffect';
import Useref from '../components/Uesref';
import Reducerhook from '../components/Reducerhook';
import ErrorBoundary from '../components/ErrorBoundary';

const Locations = () => {
    const campsProps = [
        {
            title: 'Close up view of camp',
            image: camp1,
        },
        {
            title: 'Comfortable stay at camp',
            image: camp2,
        },
        {
            title: 'Scenic location of camps',
            image: camp3,
        }
    ];
    const [username, setUsername] = useState("");
    const [username2, setUsername2] = useState("");

    const [heading, setHeading] = useState("Footer Image");
    const [showimg, setImg] = useState(true);
    const places = ["Lakad", "Arunachal Pradesh", "Manali", "Rajestan"];
    return (
        <div class="locations bg-secondary">
            <div class="container-fluid">
                <div class="row">
                    <img className='w-100' src={location1} class="location1" />
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 className='text-center text-danger'>Moto_Rides Camps</h2>
                            <h4 className='text-center text-warning '>Life amidst nature</h4>
                            <p>We have camps at various locations to provide you an enjoyable and comfortable camping experience on your tours. These camps are situated amidst scenic nature surrounded with forest, wild flowers and mountain rivers. They are not far from the road so that visitors have easy access to the camp. Campers are provided with clean well-furnished tents, attached bath, kid friendly environment and best of amenities. All our facilities are well-maintained and provide you a safe and fun-filled environment.</p>
                            <p>You can enjoy trekking, river crossing, rapelling, rock climbing and many other adventure activities during your stay at the camps. We also provide facilities for bonfire at night. We have various food options and stay packages and also help you to customize your stay. Currently we have camps at Chhitkul, Shoja and Kotgarh. We also have camps coming up at Barot and Spiti soon.</p>
                            <p>Below are pictures of some of our campsites.</p>
                        </div>
                    </div>
                    <div class="row">
                        {showimg ? (
                            <>
                                <div class="row">
                                    {campsProps.map((camp) => (
                                        <Camps
                                            title={camp.title}
                                            image={camp.image}
                                        />
                                    ))}
                                </div>
                                <div class="row">
                                    <Footerimg heading={heading} child={setHeading} />
                                </div>
                            </>
                        ) : (<>
                            <div class="row">
                                <Footerimg heading={heading} child={setHeading} />
                            </div>
                            <div class="row">
                                {campsProps.map((camp) => (
                                    <Camps
                                        title={camp.title}
                                        image={camp.image}
                                    />
                                ))}
                            </div>
                        </>)}
                    </div>
                    <hr></hr>
                    <h2 class="text-center mt-2 mb-2">componentDidupdate</h2>
                    <Didupdate />
                    <hr></hr>
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="text-danger text-center">{heading}</h2>
                            <h3 class="bg-info p-3 rounded-3 text-center">Current Trips</h3>
                            <ul class="list-group">
                                {places.map((place1) =>
                                    (<Listli place={place1} />)
                                )}
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <h2 class="text-center mt-2 mb-2">componentWillupdate</h2>
                    <ErrorBoundary>
                        <h1>with error boundary</h1>
                        <Willupdate />
                    </ErrorBoundary>
                    <hr></hr>
                    <h1>without error boundary</h1>
                    <Willupdate />
                    <hr></hr>
                    <h2 class="text-center mt-2 mb-2">UseEffect</h2>
                    <Useeffect />
                    <hr></hr>
                    <div class="row">
                        <div class="col-lg-6">
                            <button type="button" onClick={() => setImg(!showimg)} class="btn btn-primary">change</button>
                        </div>
                        <div class="col-lg-6">
                            <button type="button" onClick={() => setHeading("Footer image Parent")} class="btn btn-primary">heading</button>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div class="row mt-4">
                    <div class="col-lg-12">
                        <input type="text" id="usernameIn" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control" placeholder="User Name" aria-label="User Name" />
                        <button type="button" id='save' onClick={() => setUsername2(username)} class="btn btn-primary mt-2"  >save</button>
                    </div>
                </div>
                <Username1 username={username} />
                <hr></hr>
                <h2 class="text-center mt-2 mb-2">useRef</h2>
                <Useref />
                <hr></hr>
                <Reducerhook />
                <hr></hr>
            </div>
        </div>
    );
}
export default Locations;