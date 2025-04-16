import "./hero.css";
import Speech from "./speech.jsx"
const Hero = () => {
    return <div className="hero">
      <div className="hsection left">
        <h1 className="hTitle">Hello,
          <br />
          <span>I'm Ridha!</span>
        </h1>
        <div className="designation"></div>
        <h2>Undergraduate in Computer Science and Engineering</h2>
        <p>Web Developer | Tech Enthusiast</p>
      </div>

      {/* SCROLL SVG */}
<a href="#services">
  <svg
    width="50px"
    height="50px"
    viewBox="0 0 24 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="white" strokeWidth="2">
      <path d="M12 10 L12 34" strokeLinecap="round" />
      <path d="M6 28 L12 34 L18 28" strokeLinecap="round" strokeLinejoin="round">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 6; 0 0"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
</a>


      <div className="hsection right"></div>
        {/*follow*/}
        <div className="follow">
          <a href ="https://github.com/R1dhaa"
          target="_blank" 
          rel="noopener noreferrer"
          >
            <img src="/github.jpg" alt="" />
          </a>
          <a href ="https://www.linkedin.com/in/fatma-ridha/"
          target="_blank" 
          rel="noopener noreferrer">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
        <Speech />

        <a href="/#contact" className="contactLink">
        <div className="contactButton">
        
        <svg viewBox="0 0 200 200" width="150" height="150">
    {/* Center filled circle */}
    <circle cx="100" cy="100" r="70" fill="gold" stroke="none" />

    {/* Star spikes */}
    <defs>
      <g id="star-point">
        <polygon
          points="0,-90 10,-70 -10,-70"
          fill="orange"
          stroke="none"
        />
      </g>

      {/* Circular path for text */}
      <path
        id="textCircle"
        d="
          M 100,100
          m -55,0
          a 55,55 0 1,1 110,0
          a 55,55 0 1,1 -110,0
        "
        fill="none"
      />
    </defs>

    {/* Star points around the sun */}
    <g transform="translate(100,100)">
      {[...Array(20)].map((_, i) => (
        <use
          key={i}
          href="#star-point"
          transform={`rotate(${i * (360 / 20)})`}
        />
      ))}
    </g>

    {/* Curved text */}
    <text
      fontSize="17"
      fill="black"
      textAnchor="middle"
      letterSpacing="2"
    >
      <textPath
        href="#textCircle"
        startOffset="50%"
        dominantBaseline="middle"
      >
        •contact me•&ensp;&ensp;&emsp; •contact me•
      </textPath>
    </text>
  </svg>
</div>

        
        </a>

    </div>
    
  };
  
  export default Hero