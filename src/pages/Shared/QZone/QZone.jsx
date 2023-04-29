// eslint-disable-next-line no-unused-vars
import React from 'react';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary'>
            <h4>Q-Zone</h4>
            <div>
                <img src={qZone1} alt="" />
            </div>
            <div>
                <img src={qZone2} alt="" />
            </div>
            <div>
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;