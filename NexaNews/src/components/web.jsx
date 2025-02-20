import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import './web.css'

const Web = () => {
  return (
    <div className='page-container'>
  
  <div className="content">
  <div className="video-container1">
    <video className="vide" src="/webbg.mp4" autoPlay loop muted></video>
    <p className="web">Is Web Development the Right Career for You? 🤔</p>
</div>
    
    <p className='webh3'>Feeling unsure about web development? Wondering if coding can spark your interest? 
      You’re not alone! Many start with zero experience and go on to build amazing careers.</p>

    <video className="video" src="/1video_V1.mp4" width="600" height="300" playsInline preload="auto" controls />

    <p className='why'>💡 Why Consider Web Development?</p>
    <ul className='webul'>
      <li>✅ <strong>Creative & Logical</strong> – Blend design with problem-solving.</li>
      <li>✅ <strong>High Demand</strong> – Companies are always hiring developers.</li>
      <li>✅ <strong>Flexible Careers</strong> – Work remotely, freelance, or join top tech firms.</li>
      <li>✅ <strong>Constant Growth</strong> – Always something new to learn!</li>
    </ul>

    <p className='why1'>🤔 Will You Enjoy It?</p>
    <ul className="webul1">
      <li> Like solving puzzles? You’ll love coding!</li>
      <li>Enjoy designing? Frontend might be for you.</li>
      <li> Prefer logic & data? Backend development is your thing!</li>
    </ul>

    <p className='why2'>🎯 What Does a Web Developer Do?</p>
    <p className='why3'>Web developers create and maintain websites and web applications. They work with</p>
    <ul className="webul2">
      <li><b>Frontend Development –</b>Creating the visual part of websites (HTML, CSS, JavaScript).</li>
      <li><b>Backend Development –</b>Managing databases, servers, and application logic. </li>
      <li> <b>Full-Stack Development –</b>Combining both frontend and backend skills.</li>
    </ul>
    <p className='why3 c'>Depending on your role, you might build interactive websites, e-commerce platforms, blogs, or complex web apps.
</p>
<p className='why4'>⚠️ Challenges to Consider</p>
<ul className="webul2 d">
      <li> <b>❌ Constant Learning –</b>Technology changes fast, requiring continuous upskilling.</li>
      <li><b>❌ Debugging Can Be Frustrating –</b>Fixing code errors can sometimes be stressful.</li>
      <li> <b>❌ Tight Deadlines –</b>Projects often have deadlines that require strong time managemen.</li>
    </ul>
    <p className='a'>If you enjoy challenges and innovation, these won’t be deal-breakers.</p>
  <p className='why5'>💡 How to Get Started</p>
  <div className="video-container">
    <div className="video-block">
        <video className="video" src="/html.mp4" playsInline preload="auto" controls></video>
        <p className="video-text">
            <a href="https://youtu.be/HcOc7P5BMi4?si=SZPl97QBY5sTdFht">➡️Learn The Basics</a>
        </p>
    </div>

    <div className="video-block">
        <video className="video" src="/fb.mp4" playsInline preload="auto" controls></video>
        <p className="video-text">
            <a href="https://youtu.be/nu_pCVPKzTk?si=CoMi_6BHuxg-tV20">➡️Choose Specialization</a>
        </p>
    </div>

    <div className="video-block">
        <video className="video" src="/level.mp4" playsInline preload="auto" controls></video>
        <p className="video-text">
            <a href="https://youtu.be/bKjpNrbMyvc?si=Z_i3cQhkcwC09knw">➡️Build 🔨</a> |
            <a href="https://github.com/"> Connect 🤝</a> |
            <a href="https://www.udemy.com/courses/search/?price=price-free&q=web+development&sort=relevance&src=ukw">Certify 🎓</a>
        </p>
    </div>
</div>
<h1 className='l'>🌍 Build, innovate, and bring the web to life—one line of code at a time! 🚀💻</h1>
  </div>
</div>

  )
}

export default Web
