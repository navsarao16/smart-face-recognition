import React from 'react';
import Tilt from 'react-tilt' // copy  from npmjs.com/package/react-tilt 
import './Logo.css';
import LogoImg from './logo.png';

const  Logo = ()=>
{
	// tilt copy from npmjs.com/package/react-tilt 
	return(
		//ma4 margin    mt0 margin top
			<div className='ma4 mt0'> 

			<Tilt className="Tilt br2 shadow-2" options={{ max : 40, speed: 300 }} style={{ height: 30, width: 50 }} >
              <div className="Tilt-inner">
               			<img style={{paddingTop:'2px'}}alt='logo' src={LogoImg}/>
              </div>
			</Tilt>
			</div>
		);
}
export default Logo;