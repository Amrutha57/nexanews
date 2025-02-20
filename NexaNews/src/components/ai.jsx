import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import './web.css'
import './cyber.css'

const Ai = () => {
    const navigate = useNavigate();
  return (
    <div className='cpage'>
    <img  className='vide1'src='/ai.gif'  alt='Cybersecurity Background' />
    <h1 className='category-title2'>🤖 Is AI & Machine Learning the Right Career for You? 🔍💡</h1>

    <p className='cyber-intro'>
    Artificial Intelligence (AI) and Machine Learning (ML) are some of the hottest career paths right now,
     but is it the right choice for you? Let’s break it down!

    </p>
    <img  className ='cyber-img'src='/ai1.gif' width='500px' height='350px'/>
    <p className='cyber-reasons'>💡 Why Consider AI & ML?</p>
    <ul className='cyber-list'>
        <li>✅ <strong>Massive Demand</strong> –Businesses across industries are racing to adopt AI & ML</li>
        <li>✅ <strong>High Salaries</strong> –  AI & ML professionals earn some of the highest salaries in tech..</li>
        <li>✅ <strong>Exciting Challenges</strong> – Solve real-world problems, from self-driving cars to medical breakthroughs.</li>
        <li>✅ <strong>Work Anywhere</strong> –Remote jobs, freelancing, and opportunities at top companies worldwide.</li>
    </ul>
    <h2 className="cyber-title">🎯 What Do AI & ML Professionals Do??</h2>
    <ul className="cyber-list">
        <li>🔹 <strong> Data Scientists </strong> – Analyze data to extract insights and drive business decisions..</li>
        <li>🔹 <strong>Machine Learning Engineers </strong> –  Build and train AI models that power automation.</li>
        <li>🔹 <strong> AI Researchers </strong> – Push the boundaries of AI with new algorithms and innovations.</li>
        <li>🔹 <strong> NLP Engineers </strong> – Develop AI systems that understand and process human language.</li>
    </ul>

    <h2 className="cyber-title">🛠 How to Start Your AI & ML Career?</h2>
    <ul className="cyber-list">
        <li>💻 <strong>Learn the Basics</strong> – Start with Python, statistics, and linear algebra.</li>
        <li>📜 <strong>Get Certified</strong> – Earn AI & ML certifications like TensorFlow Developer, AWS ML, or Google AI.</li>
        <li>🛠 <strong>Practice Hacking Safely</strong> – Build models using Kaggle, TensorFlow, or PyTorch.</li>
        <li>🔗 <strong>Join Communities</strong> –  Engage with AI experts on GitHub, LinkedIn, and ML forums.</li>
    </ul>

    <h2 className="cyber-title">🚀 Ready to Shape the Future with AI?</h2>
    <p className="cyber-text">
    If you love solving complex problems, automating tasks, and creating smart systems, AI & ML could be your perfect career path!    </p>
    <p className="cyber-text">Start learning today and become an AI innovator! 🤖🚀</p>
    <div className="cyber-challenges">
    <h2 className="cyber-title">⚠️ Challenges to Consider in AI & ML</h2>
    <p className="challenge-intro">
    While AI & ML are exciting fields, they come with challenges you should be ready for:
    </p>
    <img  className ='cyber-img'src='/ai2.gif' width='500px' height='350px'/>
        <p className='cyber-list'>🚨 1. Data Quality Issues </p>

    
        <p className='cyber-list'>⏳ 2. Computational Costs </p>
   
        <p className='cyber-list'>📚 3. Continuous Learning</p>
    
 
        <p className='cyber-list'>🛠 4. Ethical Dilemmas </p>
   
        <p className='cyber-list'>🤔 5. Interpretability </p>

    <h2 className="cyber-title">🚀 How to Overcome These Challenges?</h2>
    <ul className="cyber-list">
        <li>✅ Use data preprocessing techniques like cleaning, augmentation, and deduplication..</li>
        <li>✅ Utilize specialized hardware (TPUs, GPUs, edge computing).</li>
        <li>✅ Use federated learning to enhance privacy and decentralized improvements.</li>
        <li>✅ Prioritize explainability and user transparency in AI decisions.</li>
        <li>✅ Use explainable AI (XAI) techniques like SHAP and LIME.</li>
    </ul>

    <p className="challenge-intro">AI isn’t easy, but if you love innovation and pushing boundaries, it’s the future! 🚀🤖💡</p>

    <h2 className='cyber-title1'>Let's dive into cybersecurity! 🕵️‍♂️💻</h2>

    <div className="video-container">
    <div className="video-block">
        <video className="video" src="/ail.mp4" playsInline preload="auto" controls></video>
        <p className="video-text">
            <a href="https://www.youtube.com/results?search_query=ai+basics"> ➡️Understand the Basics 📚</a>
        </p>
    </div>

    <div className="video-block">
        <video className="video" src="/ais.mp4" playsInline preload="auto" controls></video>
        <p className="video-text">
            <a href="https://www.youtube.com/results?search_query=ai+projects">➡️Gain Hands-on Experience (Projects & Competitions) 🛠️</a>
        </p>
    </div>

    <div className="video-block">
        <video className="video" src="/aib.mp4" playsInline preload="auto" controls></video>
        <p className="video-text">
            <a href="https://youtu.be/kku0fVfksrk?si=NBRmwN05g_SNWIPC">➡️Build 🔨</a> |
            <a href="https://github.com/"> Connect 🤝</a> |
            <a href="https://www.udemy.com/courses/search/?src=ukw&q=ai">Certify 🎓</a>
        </p>
    </div>
</div>
<h1 className='l'>🚀 Start now, stay consistent, and the AI world is yours! 😃</h1>
</div>

</div>


  )
}

export default Ai
