import React from 'react'
import './contact.css'
import resume_img from '../../assets/EdeNaveenResume.png'
import email from '../../assets/e-mail.jpg'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import GitHub from '../../assets/GitHub.png'

const contact = () => {
  return (
    < div className='contactPage'>
      <div div id="Resume">
<h1 className='contactPageTitle'>My Resume</h1>
<p className="ResumeDesc">Explore my dynamic resume to discover a seasoned MERN full-stack developer with a passion for 
crafting innovative web solutions. With over six months of hands-on experience, my expertise spans the intricacies of 
modern web development. Dive into a showcase of projects, skills, and achievements that reflect my commitment to 
excellence and readiness for new challenges.</p>
<a href="https://drive.google.com/file/d/1X9JyMVZJqlvt6UvM9tdMwA-l80TGlWzf/view?usp=sharing" target='_blank' className="resume-link">Click to View My Resume</a> 
    <br/>
     <br/>
     <img src={resume_img} className='resumeimg' alt=''/>
      </div>
      
      <div id="contact">
<h1 className="contactPageTitle">Contact Me</h1>
<div className="contactDesc">Contact me through these social media platforms.</div>
<div className='logo_imgs'>
  <a href='mailto:naveenede4@gmail.com' target='_blank'><img src={email} alt='' className='idimg'></img></a>
  <a href='https://www.linkedin.com/in/edenaveen/' target='_blank'><img src={linkedin} alt='' className='idimg'></img></a>
  <a href='https://github.com/Naveen22-2002' target='_blank'><img src={GitHub} alt='' className='idimg'></img></a>
  <a href='https://www.instagram.com/_n_a_v_e_e_n___ede/?igsh=MTFzczFwbGtycWs2bQ%3D%3D' target='_blank'><img src='https://i.pinimg.com/originals/72/a3/d9/72a3d9408d41335f39e9f014dc35cf44.jpg' alt='' className='idimg'></img></a>

</div>
</div>
</div>
  )
}

export default contact
