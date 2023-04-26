import { XCircle } from 'phosphor-react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Container, Overleay } from './styles';

export function Modal({
  courseIsVisible, SetCourseIsVisible, course, projectModal,
}) {
  useEffect(() => {
    document.body.style.overflowY = courseIsVisible ? 'hidden' : 'auto';
  }, [courseIsVisible]);

  return (
    <Overleay isVisible={courseIsVisible}>
      <Container project={projectModal}>
        <XCircle
          size={40}
          weight="fill"
          onClick={() => SetCourseIsVisible(false)}
        />
        <div>
          <div className="imagensAndLinks">
            <img src={course.image} alt={course.title} className={course.mobile} />
            {
              course.info && (
              <div className="links">
                {course.info.linkWebSite && <a href={course.info.linkWebSite} target="_blank" rel="noreferrer">Projeto</a>}
                {course.info.linkproject && <a href={course.info.linkproject} target="_blank" rel="noreferrer">Repositório</a>}
                {course.info.linkPost && <a href={course.info.linkPost} target="_blank" rel="noreferrer">Linkedin</a>}
              </div>
              )
            }
          </div>
          <div className="detailsAndData">
            <h2>{course.title}</h2>
            <p className="details">{course.text}</p>
            <p className="date">{course.date}</p>
          </div>
        </div>
      </Container>
    </Overleay>
  );
}

Modal.propTypes = {
  courseIsVisible: PropTypes.bool.isRequired,
  SetCourseIsVisible: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  projectModal: PropTypes.bool.isRequired,
};
