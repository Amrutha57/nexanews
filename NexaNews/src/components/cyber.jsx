import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import './web.css'
import './cyber.css'

const Cyber = () => {
    const navigate = useNavigate();
  return (
    <div className='cpage'>
    <img  className='vide1'src='/cyberbg.webp' width='1700px' height='50px' alt='Cybersecurity Background' />
    <h1 className='category-title2'>🔐 Is Cybersecurity the Right Career for You? 🤔</h1>

    <p className='cyber-intro'>
        Feeling Curious About Cybersecurity?  
        Ever wondered what it's like to defend networks from hackers, stop cyber threats, and keep data safe?  
        Cybersecurity is an exciting and high-demand field that could be your perfect career path!
    </p>
    <img  className ='cyber-img'src='/cyber3.gif' width='500px' height='350px'/>
    <p className='cyber-reasons'>💡 Why Consider Cybersecurity?</p>
    <ul className='cyber-list'>
        <li>✅ <strong>Massive Demand</strong> – Companies are desperate for security experts!</li>
        <li>✅ <strong>High Salaries</strong> – Cyber pros earn top salaries worldwide.</li>
        <li>✅ <strong>Exciting Challenges</strong> – Solve cyber puzzles and stop digital attacks.</li>
        <li>✅ <strong>Work Anywhere</strong> – Remote jobs, freelancing, and top companies.</li>
    </ul>
    <h2 className="cyber-title">🎯 What Do Cybersecurity Professionals Do?</h2>
    <ul className="cyber-list">
        <li>🔹 <strong>Ethical Hackers</strong> – Test systems by hacking them (legally!).</li>
        <li>🔹 <strong>Security Analysts</strong> – Monitor and prevent cyber attacks.</li>
        <li>🔹 <strong>Forensic Experts</strong> – Investigate cybercrimes and track hackers.</li>
        <li>🔹 <strong>SOC Analysts</strong> – Work in Security Operation Centers stopping threats.</li>
    </ul>

    <h2 className="cyber-title">🛠 How to Start Your Cybersecurity Career?</h2>
    <ul className="cyber-list">
        <li>💻 <strong>Learn the Basics</strong> – Start with networking, Linux, and security fundamentals.</li>
        <li>📜 <strong>Get Certified</strong> – Go for CompTIA Security+, CEH, or CISSP certifications.</li>
        <li>🛠 <strong>Practice Hacking Safely</strong> – Use TryHackMe, Hack The Box, and CTF challenges.</li>
        <li>🔗 <strong>Join Communities</strong> – Connect with pros on GitHub, Reddit, and cybersecurity forums.</li>
    </ul>

    <h2 className="cyber-title">🚀 Ready to Defend the Digital World?</h2>
    <p className="cyber-text">
        If you love tech, problem-solving, and high-stakes challenges, cybersecurity might be the perfect career for you!
    </p>
    <p className="cyber-text">Start learning today and become a cyber warrior! 🛡💻</p>
    <div className="cyber-challenges">
    <h2 className="cyber-title">⚠️ Challenges to Consider in Cybersecurity</h2>
    <p className="challenge-intro">
        While cybersecurity is an exciting and rewarding career, it comes with its own challenges that you should be prepared for.
    </p>
    <img  className ='cyber-img'src='/cyber2.gif' width='500px' height='350px'/>
        <p className='cyber-list'>🚨 1. Constantly Evolving Threats</p>

    
        <p className='cyber-list'>⏳ 2. High Pressure & Stress</p>
   
        <p className='cyber-list'>📚 3. Continuous Learning</p>
    
 
        <p className='cyber-list'>🛠 4. Technical Complexity</p>
   
        <p className='cyber-list'>🧩 5. Ethical & Legal Challenges</p>

    <h2 className="cyber-title">🚀 How to Overcome These Challenges?</h2>
    <ul className="cyber-list">
        <li>✅ Stay Updated – Follow cybersecurity blogs, news, and research papers.</li>
        <li>✅ Practice Hands-on Skills – Use TryHackMe, Hack The Box, and CTF challenges.</li>
        <li>✅ Get Certified – Earn Security+, CEH, CISSP to boost credibility.</li>
        <li>✅ Join Communities – Engage in GitHub, Reddit, Discord, and cybersecurity forums.</li>
        <li>✅ Improve Soft Skills – Communication and teamwork are just as important as technical skills.</li>
    </ul>

    <p className="challenge-intro">Cybersecurity isn’t easy, but if you love problem-solving and digital defense, it’s worth it! 🔥💻🔐</p>

    <h2 className='cyber-title1'>Let's dive into cybersecurity! 🕵️‍♂️💻</h2>

    <div className="video-container">
    <div className="video-block">
        <video className="video" src="/cyberl.mp4" playsInline preload="auto" controls></video>
        <p className="video-text">
            <a href="https://youtu.be/5MMoxyK1Y9o?si=hsRayB3hA3BWUklz">➡️Understand the Basics 📚</a>
        </p>
    </div>

    <div className="video-block">
        <video className="video" src="/cyber2.mp4" playsInline preload="auto" controls></video>
        <p className="video-text">
            <a href="https://youtu.be/U3LMnJSNsLY?si=XSuSHXaAWoVVqzqz">➡️Learn Key Cybersecurity Skills 🛠️</a>
        </p>
    </div>

    <div className="video-block">
        <video className="video" src="/cys.mp4" playsInline preload="auto" controls></video>
        <p className="video-text">
            <a href="https://youtu.be/kku0fVfksrk?si=NBRmwN05g_SNWIPC">➡️Build 🔨</a> |
            <a href="https://github.com/"> Connect 🤝</a> |
            <a href="https://www.udemy.com/courses/search/?q=cyber+security+course&src=sac&kw=cyber+sec">Certify 🎓</a>
        </p>
    </div>
</div>
<h1 className='l'>🔐 Stay sharp, stay vigilant, and own the cybersecurity world! 🚀💻</h1>
</div>

</div>


  )
}

export default Cyber
