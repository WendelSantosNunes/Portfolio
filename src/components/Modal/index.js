import { XCircle } from 'phosphor-react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Container, Overleay } from './styles';

export function Modal({ courseIsVisible, SetCourseIsVisible, course }) {
  useEffect(() => {
    document.body.style.overflowY = courseIsVisible ? 'hidden' : 'auto';
  }, [courseIsVisible]);

  return (
    <Overleay isVisible={courseIsVisible}>
      <Container>
        <XCircle
          size={40}
          weight="fill"
          onClick={() => SetCourseIsVisible(false)}
        />
        <div>
          <div className="imagensAndLinks">
            <img src={course.image} alt={course.title} />
            {
              course.info && (
              <div className="Links">
                <a href="/">s</a>
                <a href="/">s</a>
                <a href="/">s</a>
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
};
