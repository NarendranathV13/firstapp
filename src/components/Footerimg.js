import React from 'react';
import '../assets/styles/style.css';
import footerL from '../assets/images/footer-home.png';
import PropTypes from 'prop-types';//(install prop type  npm install prop-type --save)
const Footerimg = (props) => {
    console.log(props);
    return (
        <>
            <div class="col-lg-12">
                {/* <h2 class="text-danger text-center">{props.heading}</h2> */}
                <img class='campImg' src={footerL} id="footerL" />
            </div>
            <div class="row">
                <button type="button" onClick={() => { props.child("footer image child") }} class="btn btn-success">child button</button>
            </div>
        </>
    );
}
export default Footerimg;
Footerimg.defaultProps = {
    heading: "Moto_Rides"
}
Footerimg.propTypes = {
    heading: PropTypes.string
};