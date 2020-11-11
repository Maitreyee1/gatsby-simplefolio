import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const Education = () => {
  const { education } = useContext(PortfolioContext);
  
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
    <section id="education">
      <Container>
	  <div className="education-wrapper">
        <Title title="Education" />
		{education.map((edu) => {
			const { id,ulogo,clogo,university,duration,college,degree,gpa,description,courses,resume } = edu;
		return (
        <Row key={id}>
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="education-wrapper__image">
                <AboutImg alt="University" filename={ulogo} />
				&emsp; &emsp;
				{clogo && <AboutImg alt="College" filename={clogo} />}
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={14}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="education-wrapper__info">
				  <h2 className="education-wrapper__info-text">{university|| ''}</h2>
				  <h2 className="education-wrapper__info-text">{college || ''}</h2>
				  <h3 className="education-wrapper__info-text">{degree|| ''}</h3>
				  <h3 className="education-wrapper__info-text">{gpa|| ''}</h3>
				  <h3 className="education-wrapper__info-text">{description|| ''}</h3>
				  <h3 className="education-wrapper__info-text">{courses|| ''}</h3>
			</div>
            </Fade>
          </Col>
        </Row>
		);
		})}
		</div>
      </Container>
    </section>
  );
};

export default Education;
