import React, { useState, useEffect } from 'react';
import vector from '../../../assets/arrow_course.svg';
import './QuestionBank.css';
import { useNavigate } from 'react-router-dom';
import { getallquiz } from '../../../services/createquizService';
import Music from '../../Loaders/Music';

function QuestionBank() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    getallQ();
  }, []);

  const getallQ = async () => {
    setLoading(true);
    try {
      const resp = await getallquiz();
      setQuizzes(resp);
      setLoading(false);
    } catch (error) {
      console.log('Error retrieving quizzes:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="rpart3">
        <div className="Question_head">
          <div className="Question_head_items">Quizzes</div>
          <div className="Question_head_items1" onClick={() => navigate('/home/examination')}>
            View All
          </div>
        </div>
       {!loading && quizzes && quizzes.length >= 0 ? (
  <div className="errormsg">No quizzes available.</div>
) : (
  loading && <Music />
)}

{!loading && quizzes && quizzes.length > 0 && (
          <div>
            {quizzes.slice(0, 3).map((quiz, index) => (
              <div className="qa_list_av" key={index}>
                <div className="recent_qa">
                  <div className="qa_course_code">
                    <div className="qa_Number">{quiz.title}</div>
                    <div className="qa_details_code">{quiz.description}</div>
                    <div className="qa_details_code">3 Questions</div>
                  </div>
                  <div
                    className="course_contents hover_arrow"
                    id="course_img2"
                    onClick={() => navigate('/home/examination/preview')}
                  >
                    <img src={vector} className="adjust_img2" alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionBank;
