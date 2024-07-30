import React from 'react'

const AboutMe = () => {
  return (
    <>
      <div className='about-me-container'>
        <div className='intro'>
          <div className='text-wrapper'>
            <h1>Hi I'm Nia</h1>
            <h2>This websites Developer</h2>
          </div>
          <p>I'm currently studying Web UX at Yoobee College. Not sure which aspect I'll go into just quite yet, if it will frontend or backend development. We will just have to wait and see. I enjoy coding and the satisfaction I get from nailing a pice of code that was giving me trouble. Currently learning react and have enjoyed what I've learnt so far.</p>
        </div>
        <div className='list-wrapper'>
          <div className='qualifications-container'>
            <h3>Qualifications</h3>
            <ul>
              <li>Lvl 6 Web & UX Diploma (In progress)</li>
              <li>Lvl 5 Web & Graphic Diploma </li>
              <li>Lvl 4 Creative Media Certificate</li>
            </ul>
          </div>
          <div className='skills-container'>
            <h3>My Skills</h3>
            <ul>
              <li>Figma</li>
              <li>Adobe</li>
              <li>Creating Personas</li>
              <li>HTML/CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
