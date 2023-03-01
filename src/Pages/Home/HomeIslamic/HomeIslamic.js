import React from 'react';
import './HomeIslamic.css';
import homeIslamicimg from '../../../Assets/img/home/Islamic.jpg';
import Attar from '../../Categories/Islamic/Attar/Attar';
import useAttar from '../../../Hooks/UseAttars/UseAttars';

const HomeIslamic = () => {
    const [attars, setAttars] = useAttar([]);

    return (
        <div className='container-xxl my-5'>
            <div>
                <div className='hoemIslamic-title-dev'>
                    <h5 className='hoemIslamic-title-dev-h5'>ISLAMIC</h5>
                </div>
            </div>
            <div className='d-flex'>
                <img src={homeIslamicimg} alt='' />
                <div className='attars'>
                    <div className='attars-dev'>
                        {
                            attars.map(attar => <Attar key={attar._id} attar={attar} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeIslamic;