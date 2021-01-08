import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';


const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, img1,img2,paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
                    ''}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    ''}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || ''}
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

		<div>
            <Fade left duration={1000} delay={600} distance="30px">
			<div className="allied_div">

              <div className="about-wrapper__image">
			  <Table borderless>
			  <tbody>
			  <tr>
				<td><AboutImg  alt="AIS" filename={img1}/></td>
				<td><AboutImg className="Image" alt="AIS" filename={img2} /></td>
              </tr>
			  </tbody>
			  </Table>
			  </div>
			<h2 className="caption">Technical Officer</h2><a className="caption" href='https://aisutd.org/' target="_blank"><text className="caption">Artificial Intelligence Society UTD(2018-2020)</text></a>

			</div>
			</Fade>			
		</div>
		 </Row>
      </Container>
    </section>
  );
};

export default About;
