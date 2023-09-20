import React, { useState, useEffect } from 'react';
import '../assets/styles/style.css';
import Contexthook from '../components/Contexthook';
import Usecallback_new from '../components/Usecallback_new';
import Usememo from '../components/Usememo';
import Useid from '../components/Useid';
import Deletecomp from '../components/Deletecomp';

const Offers = () => {
    const [isDeleteCompVisible, setIsDeleteCompVisible] = useState(true);

    useEffect(() => {
        console.log('Component mounted');
    
        return () => {// clean up function
          console.log('Component will unmount');
          if (isDeleteCompVisible) {
            console.log('Cleanup for conditional case');
            // Perform cleanup tasks specific to the conditional case
          }
        };
      }, [isDeleteCompVisible]);

    return (
        <>
        <hr></hr>
        <h2 class="text-center mt-2 mb-2">context hook</h2>
        <Contexthook />
        <hr></hr>
        <h2 class="text-center mt-2 mb-2">useCallback hook</h2>
        <Usecallback_new />
        <hr></hr>
        <h2 class="text-center mt-2 mb-2">useMemo</h2>
        <Usememo />
        <hr></hr>
        <h2 class="text-center mt-2 mb-2">useId</h2>
        <Useid />
        <hr></hr>
        <h2 class="text-center mt-2 mb-2">unmount using use effect</h2>
        {isDeleteCompVisible && <Deletecomp />}
        <div className="row">
            <div className="col-lg-12">
                <button className="btn btn-warning" type="button" onClick={() => setIsDeleteCompVisible(!isDeleteCompVisible)}>unmount</button>
            </div>
        </div>
        </>
    );
};

export default Offers;
