import React from 'react';
//import { BrowserRouter, Link } from 'react-router-dom';
import './student.css';
import { useEffect } from 'react';
import { useState} from 'react';
import {updateLessonProgress} from 'react';


const initialLessons = [
  { week: 'Welcome & Onboarding',  Feedback: 'Feedback', completed: 8, total: 8 },
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
}
};

function Student() {
  return (
    <div className="body">
      <div className="modules"> {
       initialLessons.map((lesson, index) => (
      <div
        key={index}
        className="lesson"
        onClick={() => updateLessonProgress(index)}
      >
        <p className="week">{lesson.week}</p>
        <p className="feedback">Feedback</p>
        <span
          className={`status ${
            lesson.completed === lesson.total ? 'completed' : 'incomplete'
          }`}
        >
          {lesson.completed}/{lesson.total} Completed{' '}
          {lesson.completed === lesson.total ? '✅' : '❌'}
        </span>
       </div> ))}
       </div>
    </div>
  );
}

export default Student;