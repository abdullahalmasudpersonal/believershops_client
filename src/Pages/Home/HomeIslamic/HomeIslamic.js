import React from 'react';
import './HomeIslamic.css';
import homeIslamicimg from '../../../Assets/img/home/Islamic.jpg';
import Attar from '../../Categories/Islamic/Attar/Attar';
import useAttar from '../../../Hooks/UseAttars/UseAttars';

const HomeIslamic = () => {
    const [attars, setAttars] = useAttar([]);

    return (
        <div className='container-xxl px-0 my-5 hoemIslamic'>

            <div className='hoemIslamic-part1'>
                <div className='hoemIslamic-title-dev'>
                    <h5 className='hoemIslamic-title-dev-h5 m-0'>ISLAMIC</h5>
                </div>
                <img src={homeIslamicimg} alt='' />
            </div>

            <div id="exTab2" className='hoemIslamic-part2'>
                <ul class="hoemIslamic-part2-head nav nav-tabs">
                    <li class="active">
                        <a href="#1" data-toggle="tab">BESTSELLING</a>
                    </li>

                    <li><a href="#2" data-toggle="tab">FEATURED</a>
                    </li>

                    <li><a href="#3" data-toggle="tab">NEW ARRIVALS</a>
                    </li>
                    <li><a href="#4" data-toggle="tab">TOP REVIEWED</a>
                    </li>
                </ul>
                <div class="tab-content hoemIslamic-part2-content">
                    <div class="tab-pane active" id="1">
                        <div className='islamics-attars'>
                            <div className='islamics-attars-dev'>
                                {
                                    attars.map(attar => <Attar key={attar._id} attar={attar} />)
                                }
                            </div>
                        </div>
                        {/* <h3>Standard tab panel created on bootstrap using nav-tabs</h3> */}
                    </div>

                    <div class="tab-pane" id="2">
                        <h3>Notice the gap between the content and tab after applying a background color</h3>
                    </div>

                    <div class="tab-pane" id="3">
                        <h3>add clearfix to tab-content (see the css)</h3>
                    </div>
                    <div class="tab-pane" id="4">
                        <h3>Top reviewd clearfix to tab-content (see the css)</h3>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HomeIslamic;

{/*             <div className='d-flex'>
                <img src={homeIslamicimg} alt='' />

                <div className='home-attars'>
                    <div className='home-attars-dev'>
                        {
                            attars.map(attar => <Attar key={attar._id} attar={attar} />)
                        }
                    </div>
                </div>
            </div> */}