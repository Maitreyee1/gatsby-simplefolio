import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';


const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, img1,img2,img3, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade top duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
		<Row className="about-wrapper">
		<Col md={6} sm={12}>
		<div>
		<br />
            <Fade left duration={1000} delay={600} distance="30px">
			<div>
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img1} />
				&emsp; &emsp;
				<AboutImg alt="profile picture" filename={img2} />
              </div>
			<h2 className="caption">Technical Officer</h2><a className="caption" href='https://aisutd.org/' target="_blank"><text className="caption">Artificial Intelligence Society UTD(2018-2020)</text></a>
			</div>
			</Fade>
		</div>
		</Col>
		<Col md={6} sm={10}>
		<div>
            <Fade right duration={1000} delay={600} distance="30px">
			<div>
              <div className="about-wrapper__image">
				<AboutImg alt="profile picture" filename={img3} />
              </div>
			<h2 className="caption">Conducted very first 3D printing workshop, Pune 2016</h2>
			</div>
			</Fade>
		</div>
		</Col>
		 </Row>
      </Container>
    </section>
  );
};

export default About;
