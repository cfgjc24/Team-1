import React, { useEffect, useState } from 'react';
import './student.css';

// Your initial lesson data
const initialLessons = [
  { week: 'Welcome & Onboarding', Feedback: 'Feedback', completed: 8, total: 8 },
  { week: 'Week 1: Lesson 1', Feedback: 'Feedback', completed: 8, total: 8 },
  { week: 'Week 2: Lesson 2', Feedback: 'Feedback', completed: 8, total: 8 },
  { week: 'Week 3: Lesson 3', Feedback: 'Feedback', completed: 8, total: 8 },
  { week: 'Week 4: Lesson 4', Feedback: 'Feedback', completed: 8, total: 8 },
  { week: 'Week 5: Lesson 5', Feedback: 'Feedback', completed: 7, total: 8 },
  { week: 'Week 6: Lesson 6', Feedback: 'Feedback', completed: 0, total: 8 },
  { week: 'Week 7: Lesson 7', Feedback: 'Feedback', completed: 0, total: 8 },
  { week: 'Week 8: Lesson 8', Feedback: 'Feedback', completed: 0, total: 8 },
];

// Progress tracker component
const ProgressTracker = () => {
  const [lessons, setLessons] = useState(initialLessons);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Optional: Persist state using localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('lessonProgress');
    if (savedProgress) {
      setLessons(JSON.parse(savedProgress));
    }
  }, []);

  const updateLessonProgress = (index) => {
    const newLessons = [...lessons];
    if (newLessons[index].completed < newLessons[index].total) {
      newLessons[index].completed++;
      setLessons(newLessons);
      localStorage.setItem('lessonProgress', JSON.stringify(newLessons));
    }
  };

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="body">
      <div className="modules">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="lesson"
            onClick={() => updateLessonProgress(index)}
          >
            <p className="week">{lesson.week}</p>

            {/* Add the button over the Feedback text */}
            <button className="feedback-button" onClick={openPopup}>
              Feedback
            </button>

            <span
              className={`status ${
                lesson.completed === lesson.total ? 'completed' : 'incomplete'
              }`}
            >
              {lesson.completed}/{lesson.total} Completed{' '}
              {lesson.completed === lesson.total ? '✅' : '❌'}
            </span>
          </div>
        ))}
      </div>

      {isPopupVisible && (
        <div id='popupForm' className='popup'>
          <div className='popup-content'>
            <span className='close' onClick={closePopup}>&times;</span>
            <h2 className="form-title">We Want Your Feedback!</h2>
            <form>
              <label htmlFor='notes'>Summary Notes:</label>
              <input type='text' id='notes' name='notes' required/>
              <label htmlFor="comments">Comments:</label>
              <input type="texts" id="comments" name="comments" required/>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProgressTracker;