import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import './web.css'
import './cyber.css'

const Ds = () => {
    const navigate = useNavigate();
  return (
    <div className='cpage'>
    <img  className='vide1'src='/cyberbg.webp' width='1700px' height='50px' alt='Cybersecurity Background' />
    <h1 className='category-title2'>📊 Is Data Science the Right Career for You? 🤔</h1>

    <p className='cyber-intro'>
    Ever wondered how companies predict trends, recommend products, or detect fraud? Data Science is at the
     heart of it all! If you love numbers, problem-solving, and making data-driven decisions, this could be your perfect career path!


    </p>
    <img  className ='cyber-img'src='/ds.gif' width='500px' height='350px'/>
    <p className='cyber-reasons'>💡 Why Consider Data Science?</p>
    <ul className='cyber-list'>
        <li>✅ <strong>Massive Demand</strong> –  Companies worldwide need skilled data scientists!</li>
        <li>✅ <strong>High Salaries</strong> –  Data pros earn competitive salaries in top industries.</li>
        <li>✅ <strong>Exciting Challenges</strong> – Solve real-world problems using AI, ML, and analytics.</li>
        <li>✅ <strong>Work Anywhere</strong> – Remote jobs, freelancing, and opportunities in tech giants.</li>
    </ul>
    <h2 className="cyber-title">🎯 What Do Data Scientists Do?</h2>
    <ul className="cyber-list">
        <li>🔹 <strong> Data Analysts </strong> – Clean, visualize, and interpret data for insights..</li>
        <li>🔹 <strong>Machine Learning Engineers</strong> – Build AI models to automate decision-making.</li>
        <li>🔹 <strong> Data Engineers</strong> –Design and maintain scalable data pipelines.</li>
        <li>🔹 <strong> Business Intelligence Experts</strong> –  Use data to drive business strategy..</li>
    </ul>

    <h2 className="cyber-title">🛠 How to Start Your Data Science Career?</h2>
    <ul className="cyber-list">
        <li>💻 <strong>Learn the Basics</strong> – Master Python, SQL, and statistics fundamentals.</li>
        <li>
        📊 <strong> Understand Data Manipulation</strong> – Get hands-on with Pandas, NumPy, and Matplotlib.</li>

        <li>🛠 <strong>Get Certified</strong> – Consider certifications like Google Data Analytics, IBM Data Science, or Microsoft Certified Data Scientist</li>
        <li>💻 <strong>🚀 Work on Real Projects</strong> – Build data-driven apps, participate in Kaggle competitions, and contribute to open-source projects.</li>
        <li>🔗 <strong>Join Communities</strong> –  Engage with professionals on LinkedIn, Kaggle, and data science forums.

</li>
    </ul>

    <h2 className="cyber-title">🚀 Ready to Defend the Digital World?</h2>
    <p className="cyber-text"> 📢 Data Science isn’t just about numbers—it’s about uncovering insights that drive the future! 
        If you love solving problems with data, this is the career for you! 🚀📊
    </p>
    <p className="cyber-text">Start learning today and become a data wizard! 📊🚀</p>
    <div className="cyber-challenges">
    <h2 className="cyber-title">⚠️ Challenges to Consider in Data Science</h2>
    <p className="challenge-intro">
    While Data Science is an exciting field, it comes with challenges you should be prepared for:
    </p>
    <img  className ='cyber-img'src='/ds1.gif' width='500px' height='350px'/>
        <p className='cyber-list'>📉 1. Data Quality Issues </p>

    
        <p className='cyber-list'>⏳ 2. Computational Costs </p>
   
        <p className='cyber-list'>📚 3. Continuous Learning</p>
    
 
        <p className='cyber-list'>🛠 4. Technical Complexity</p>
   
        <p className='cyber-list'>🧩 5. Ethical & Legal Challenges</p>

    <h2 className="cyber-title">🚀 How to Overcome These Challenges?</h2>
    <ul className="cyber-list">
        <li>✅ Stay Updated –  Follow data science blogs, news, and research papers.</li>
        <li>✅ Practice Hands-on Skills –  Work on real-world datasets and Kaggle challenges.</li>
        <li>✅ Get Certified – Earn credentials to enhance your credibility.</li>
        <li>✅ Join Communities – Participate in GitHub, Reddit, and LinkedIn discussions.</li>
        <li>✅ Improve Soft Skills – Communication and storytelling with data are key!</li>
    </ul>

    <p className="challenge-intro">Cybersecurity isn’t easy, but if you love problem-solving and digital defense, it’s worth it! 🔥💻🔐</p>

    <h2 className='cyber-title1'>Let's dive into cybersecurity! 🕵️‍♂️💻</h2>

    <div className="video-container">
    <div className="video-block">
        <video className="video" src="/dsl.mp4" playsInline preload="auto" controls></video>
        <p className="video-text">
            <a href="https://www.youtube.com/results?search_query=data+science+fundamentals">➡️Understand the Basics 📚</a>
        </p>
    </div>

    <div className="video-block">
        <video className="video" src="/dsp.mp4" playsInline preload="auto" controls></video>
        <p className="video-text">
            <a href="https://youtu.be/U3LMnJSNsLY?si=XSuSHXaAWoVVqzqz">➡️Get Hands-on with Projects 🛠️</a>
        </p>
    </div>

    <div className="video-block">
        <video className="video" src="/Get_Hands-On.mp4" playsInline preload="auto" controls></video>
        <p className="video-text">
            <a href="https://youtu.be/kku0fVfksrk?si=NBRmwN05g_SNWIPC">➡️Build 🔨</a> |
            <a href="https://github.com/"> Connect 🤝</a> |
            <a href="https://www.udemy.com/courses/search/?q=cyber+security+course&src=sac&kw=cyber+sec">Certify 🎓</a>
        </p>
    </div>
</div>
</div>

</div>


  )
}

export default Ds
