import React from 'react';
import './intro.css';
import My_img from '../../assets/My_pic.png'  
import {Link} from 'react-scroll'
import hire_img from '../../assets/hireme.png'

const intro = () => {
  return (
    <div id="intro"> 
        <div className="introContent">
<span className='hello'>Hello,&#128075;</span>
<span className="introText">I'm <span className="introName">Naveen</span><br/>Website Developer</span>
<p className='introPara'>I am skilled and passionate MERN stack developer with experience <br/> in building visually appealing and user-friendly
     websites.</p>
    <Link to='contact' activeClass='active' spy={true} smooth={true} offset={-50} duration={500}><button className='btn'><img src={hire_img} alt='Hire me' className='btn_img'/>Hire me</button></Link> 
        </div>
        <img src={My_img} alt='Profile' className='My_img'/>
     </div>
  );
}

export default intro
