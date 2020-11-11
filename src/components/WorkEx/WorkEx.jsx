import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

function choosedesc(description){
	if(description && description.length > 1)
		return <ul className="project-wrapper__text-description">{description && description.map(bulletpoint => (<li key={bulletpoint}>{bulletpoint}</li>))||'Placeholder text'}</ul>;
	return <p className="project-wrapper__text-description">{description}</p>;}

	const WorkEx = () => {
  const { workex } = useContext(PortfolioContext);

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
    <section id="Workex">
      <Container>
        <div className="project-wrapper">
          <Title title="Work Experience" />
          {workex.map((project) => {
            const { title, duration, company,info, info2, url, repo, img, id } = project;
			const description = info.match(/\S.*?\."?(?=\s|$)/g);
			const tech= info2.split(',');

            return (
              <Row key={id}>
                <Col lg={12} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px">
                    <div className="project-wrapper__text">
						<h3 className="project-wrapper__text-title">{title || 'Work Experience'} &emsp; {duration|| ''}</h3>
						<div>
							<h4 className="project-wrapper__text-subtitle"> {company || ''}</h4>
						</div>
						<br/>
					  	<div>
							{choosedesc(description)}
						</div>
						<br/>
						<div>
								{tech && tech.map(bulletpoint =>(
								<label className="Technology" key={bulletpoint}>{bulletpoint}</label>								
								))||'Placeholder text'}
						</div>
						<br/>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                        </Tilt>
                      </a>
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

export default WorkEx;
