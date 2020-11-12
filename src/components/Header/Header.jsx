import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';

const HeaderBar = () => {
  const { header } = useContext(PortfolioContext);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <header className="header navbar-static-top">
	<Fade top={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
		<ul className="Link_List">
			<li className="myLi"><Link to="hero" smooth duration={1000}>Home</Link></li>
			<li className="myLi"><Link to="about" smooth duration={1000}>About</Link></li>
			<li className="myLi"><Link to="skills" smooth duration={1000}>Skills</Link></li>
			<li className="myLi"><Link to="education" smooth duration={1000}>Education</Link></li>
			<li className="myLi"><Link to="Workex" smooth duration={1000}>Work Experience</Link></li>
			<li className="myLi"><Link to="contact" smooth duration={1000}>Contact</Link></li>
			<li className="myLi"><a href='https://github.com/Maitreyee1' target="_blank"><i className='fa fa-github' /></a></li>
			<li className="myLi"><a href='https://www.linkedin.com/in/maitreyee-mhasakar/' target="_blank"><i className='fa fa-linkedin' /></a></li>
		</ul>
	</Fade>
    </header>
  );
};

export default HeaderBar;
