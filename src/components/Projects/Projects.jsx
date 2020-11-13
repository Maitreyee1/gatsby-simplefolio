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

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, info2, label1,label2,topictags, url, repo, img, id } = project;
			const description = info.match(/\S.*?\."?(?=\s|$)/g);
			const tech= info2.split(',');
			const topictaglist= topictags.split(',');

            return (
              <Row key={id}>
                <Col lg={12} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div className="project-wrapper__text-description">
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
						<div>
								{topictaglist && topictaglist.map(bulletpoint =>(
								<label className="Domain" key={bulletpoint}>{bulletpoint}</label>								
								))||'Placeholder text'}
						</div>
						<br/>		
                      </div>
					  {url && 
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
					  See Live
                      </a>}

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={repo}
                        >
                        {label2 || 'Source Code'}
                        </a>
                      )}
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
                          <div data-tilt className="thumbnail rounded">
						  {img && <ProjectImg alt={title} filename={img||''} />}
                            
                          </div>
			<br/>
			<br/>
			<br/>
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

export default Projects;
