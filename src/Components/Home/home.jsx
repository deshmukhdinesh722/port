import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const [count, setCount] = useState(0)
  const project1='Blog Application with Authentication';
  const project1dis='Tools: React JS, Firebase, Context API, Vercel A Well-featured Blog Application for a person.'
  
    const project2='Color My Life - Bussiness Website';
  const project2dis='Tools:HTML, CSS , JS , NETLIFY A Well-featured Bussiness website for Information.'

    const project3='Whitespace Interior - Bussiness Website';
  const project3dis='Tools:HTML, CSS , JS , NETLIFY A Well-featured Bussiness website for Information.'

  function openPopup() {
    document.getElementById('popup-title').innerHTML=project1;
    document.getElementById('discription').innerHTML=project1dis;
    const popup = document.getElementById('popup');
    const overlay = document.querySelector('.overlay');
  
    if (popup && overlay ) {
      popup.style.display = 'block';
      overlay.style.display = 'block';
    }
  }

  function openPopup2() {
    document.getElementById('popup-title').innerHTML=project2;
    document.getElementById('discription').innerHTML=project2dis;
    const popup = document.getElementById('popup');
    const overlay = document.querySelector('.overlay');
  
    if (popup && overlay ) {
      popup.style.display = 'block';
      overlay.style.display = 'block';
    }
  }

  function openPopup3() {
    document.getElementById('popup-title').innerHTML=project3;
    document.getElementById('discription').innerHTML=project3dis;
    const popup = document.getElementById('popup');
    const overlay = document.querySelector('.overlay');
  
    if (popup && overlay ) {
      popup.style.display = 'block';
      overlay.style.display = 'block';
    }
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.querySelector('.overlay');
  
    if (popup && overlay) {
      popup.style.display = 'none';
      overlay.style.display = 'none';
    }
  }
  
  return (
    <>
<div className="containor1">
  <div className="first-left">
      <h1>
    Hey,<br/>
    I'm Dinesh <br/>
    Software Developer
  </h1>
  </div>
  <div className="first-right">
  </div>
</div>
<div className="containor2">
  <div className="con-main-title">
    <h2>PROJECTS</h2>
  </div>
  <div className="edu-card-outer">
  <div className="edu-card" onClick={openPopup}>
    <h4>Blog Application with Authentication</h4>
    <h6>React JS, Firebase, Context API, Vercel<br/>
    </h6>
</div>
  <div className="edu-card" onClick={openPopup2}>
  <h4>Color My Life - Bussiness Website</h4>
    <h6>HTML, CSS, Netlify<br/>
    </h6>
  </div>
  <div className="edu-card" onClick={openPopup3}>
  <h4>Whitespace Interior -
     <br/> Bussiness Website</h4>
    <h6>HTML, CSS, Netlify<br/>
    </h6>
  </div>
  </div>
  
</div> <br/> <br/>
<div className="containor2">
  <div className="con-main-title">
    <h2>QUALIFICATION</h2>
  </div>
  <div className="edu-card-outer">
    <div className="edu-card">
    <h3>SSC</h3>
    <h6>D. K. Palkar Madhyamik Shala Karad <br/>
    Karad- Maharastra
    </h6>
  </div>
  <div className="edu-card">
  <h3>Diploma</h3>
    <h6>Government Polytechnic Karad <br/>
    Karad- Maharastra
    </h6>
  </div>
  <div className="edu-card">
  <h3>B.Tech</h3>
    <h6>D Y Patil Technical campus Talsande <br/>
    Kolhapur- Maharastra<br/>
    (Pursing)
    </h6>
  </div>
  </div>
  
</div> <br/> <br/>
<div className="overlay">
<div className="popup" id="popup">
  <h2 id="popup-title"></h2>
  <p id="discription">This is a detailed description of the project.</p>
  <div className="popup-buttons">
    <button onClick={closePopup}>Close</button>
  
  </div></div>
</div>

    </>
  )
}

export default Home
