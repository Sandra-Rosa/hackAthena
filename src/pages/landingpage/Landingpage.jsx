import React,{useEffect,useState} from 'react'
import coverimage from './hackathena.jpg';
import logo from './logo.png';
import './landingpage.css';
function Landingpage() {
    const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='landingpage'>
        <div className="cover-container" style={{ width: `${screenWidth}px`, position: 'relative' }}>
        <div className='rectangle' />
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">INFO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">TIMELINE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">PRIZES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONTACT</a>
            </li>
          </ul>
        </nav>
        <div className="logodiv" style={{ width: `${screenWidth}px` }}>
        {/* <img src={logo} className='logo'/> */}
        </div>
        <img
          src={coverimage}
          style={{ width: `${screenWidth}px`, objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}

export default Landingpage