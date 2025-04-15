import "./hero.css";
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
          
        </div>
    </div>;
  };
  
  export default Hero