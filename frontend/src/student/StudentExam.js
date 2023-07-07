// i am using 12 and one extra last alphabet to naming my classes
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import '../student/QuizStart.css'
import { ReactComponent as Instructions } from '../assets/instructions_icon.svg'
import { ReactComponent as ClockOutline } from '../assets/ClockOutline.svg'
import FlagOutline from '../assets/FlagOutline.svg'
import garbageTrash from '../assets/garbageTrash.svg'
import ChevronLeftOutline from '../assets/ChevronLeftOutline.svg'
import ChevronRightOutline from '../assets/ChevronRightOutline.svg'
import { getquizid } from '../services/createquizService'
// import axios from "axios";
function StudentExam() {
  //use states
  const [testName, settestName] = useState('Chapter 1 Quiz')
  const [correct, setcorrect] = useState(0)

  const [time, settime] = useState(30)

  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  const [flaggedQuestions, setFlaggedQuestions] = useState([]);

  const [unattempted, setUnattemptedQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState({});

  const loadqn = async () => {
    const res = await getquizid('6448bd1e04f2ebf1a32bff91');
    setQuestions(res);
    console.log(res, "hihi")
  };
  useEffect(() => {

    loadqn();
  }, []);



  // console.log(questions)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;


  const [selectedOption, setSelectedOption] = useState(null);
  const inputRefs = useRef([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    const newAnswers = userAnswers;
    newAnswers[currentQuestion] = event.target.value;
    setUserAnswers(newAnswers);

  };
//  to clear the response 

  const clearSelection = () => {
    setSelectedOption(null);
    inputRefs.current.forEach((ref) => (ref.checked = false));
    setUserAnswers((prevState) => {
      const newState = [...prevState];
      newState[currentQuestion] = null;
      return newState;
    });
  };


  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));

  const [negative, setnegative] = useState(0)

  // const selectQuestion = (questionIndex) => {
  //   setCurrentQuestion(questionIndex);
  // }

// to handle next button

  const handleNextQuestion = () => {
    if (currentQuestion === questions.AssociatedQuestions.length - 1) {
      setCurrentQuestion(questions.AssociatedQuestions.length - 1);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
//  to handle prev button
  const handlePreviousQuestion = () => {
    if (currentQuestion === 0) {
      setCurrentQuestion(0);
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

//  to set current question for all the 1,2,3 ..n buttons 
  const selectQuestion = (index) => {
    // setSelectedQuestionIndex(index);
    // setCurrentQuestion(index);
    // setFlaggedQuestions(flaggedQuestions.filter((q) => q !== index));
  };

// for the unattempted questions

  useEffect(() => {
    const unattemptedQuestions = [];
    for (let i = 0; i < questions.length; i++) {
      if (!userAnswers[i]) {
        unattemptedQuestions.push(i);
      }
    }
    setUnattemptedQuestions(unattemptedQuestions);
  }, [userAnswers, questions.length]);
  

 

  // function to calculate the score
  // const calculateScore = () => {
  //   const correctAnswers = questions.reduce((acc, question, index) => {
  //     if (userAnswers[index] === question.options.find(option => option.isCorrect).answerText) {
  //       return acc + 1;
  //     } else {
  //       return acc;
  //     }
  //   }, 0);
  //   setcorrect((correctAnswers / questions.length) * questions.length);
  // }

  // add event listener on mount of next and prev question
  const handleKeyDown = (event) => {
     if (event.keyCode === 39) {
      // right arrow key - go to next question
      handleNextQuestion();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  //  for image of question text 
  const imageUrl =
    questions && questions.AssociatedQuestions?.length > 0
      ? questions.AssociatedQuestions[currentQuestion].image_url
      : null;
 

  //   function to toggle between full screen

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      // Enter fullscreen
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
  };

  return (
    <div className='Quize_start_contrainer' >

      <div className="wapper_total12">
        <div className="upper_head_details">
          <div className="testName12">
            <span className="class_test_name_head">
              Classs Test:
            </span>
            {questions.title}
          </div>


          <div className="marks_detals">
            <div className="correct_marks12">
              <span className='fade_it'>Correct Marks</span>
            </div>
            <div className="negative_marks12">
              <span className='fade_it'>Negative Marks</span> {negative}/3
            </div>
            <div className="Intructions_start">
              <span className='intruction_icon12 fade_it' >
                <Instructions />   Instructions</span>

            </div>
          </div>

          <div className="Close_test_button">

            <div className="cross_exit" onClick={handleFullscreen}></div>

          </div>

        </div>

        <div className="both_sections12">

          <div className="lpart_section12 col-8">

            <div className="question_options_tab">
              <div className="question_options">


                <div className="div_question_map">
                  <div className='question_numberr'>
                    {/* Question {currentQuestion + 1} */}
                  </div>
                  <div className="question_titlee">

                    {questions && questions.AssociatedQuestions?.length > 0 && questions.AssociatedQuestions[currentQuestion].question_text}
                    <br />
                    <div>
                      {imageUrl && <img src={imageUrl} alt="" className='image_question' />}
                    </div>
                  </div>
                  <form >
                    {questions && questions.AssociatedQuestions?.length > 0 && questions.AssociatedQuestions[currentQuestion].options.map((option, index) => (
                      <div key={index}>
                        <label className="custom-radio">
                          <input
                            className='custom-radio-input'
                            type="radio"
                            name={`answer`}
                            value={option.option_text}
                            checked={userAnswers[currentQuestion] === option.option_text}
                            onChange={handleOptionChange}
                            ref={(el) => (inputRefs.current[index] = el)}
                          />
                          <span className='font_14'>  {option.option_text}</span>
                          {option.option_image_url && (
                            <div>
                              <img
                                src={option.option_image_url} // Access the option_image_url
                                alt="no_image"
                                className="image_question"
                              />
                            </div>
                          )}
                        </label>
                      </div>
                    ))}


                  </form>
                </div>


              </div>


              <div className='down_buttons122'>

              
                  <button className=" btnResponse" onClick={clearSelection}>
                    <span style={{ paddingRight: "5px" }}> <img src={garbageTrash} alt="" /></span>
                    Clear Response
                  </button>
               
              
                 

                  <button className="btnNext12" onClick={handleNextQuestion}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      Next
                      <img src={ChevronLeftOutline} alt="" style={{ marginLeft: "5px" }} />
                    </span>
                  </button>

             

              </div>
            </div>

          </div>


          <div className="rpart_section12 col-4">

            <div className="wrapper_rpartTabs">
              <div className="timer_nav">

                <div className="time_head">
                  Time Left
                </div>

                <div className="timer_count">

                  <span className='clock_timerSVG'> <ClockOutline /> </span>
                  {minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}

                </div>

              </div>
              <div className="question_headingJUST">
                Questions
              </div>

              <div className='question-nav'>
                {questions && questions.AssociatedQuestions?.length > 0 && questions.AssociatedQuestions.map((question, index) => (
                  <span className="question_change_btn">
                    <button
                      key={index}
                      className={`button-13 
    ${currentQuestion === index ? 'blue-current' : ''} 
    ${userAnswers[index] ? 'green-attempted' : (index !== currentQuestion || userAnswers[index] === undefined) ? 'red-skipped' : ''}
    ${flaggedQuestions.includes(index) ? 'flagged' : ''}
    ${unattempted.includes(index) ? 'grey-not-visited' : ''}`}
                      onClick={() => selectQuestion(index)}
                    >
                      {index + 1}
                    </button>

                  </span>
                ))}

              </div>


              <div className="down_part_questionTABs">

                <div className="little_summay_questions">
                  Legend for question summary
                </div>

                <div className="details_questions_dots">

                  <div className="CurrentQuestion padding_it"> <span className='cqDot'></span>Current Question </div>

                  <div className="Attempted_questions padding_it"> <span className="aqDot"></span>Attempted </div>

                  <div className="Not_Attempted padding_it "><span className='naDot'></span> Not Attempted </div>

                 

                </div>

                <button class="Submit_btn21">Submit Test</button>
              </div>
            </div>

          </div>

        </div>

      </div>
      {/* <div className="div">{userAnswers}</div> */}
      <div className="score"></div>
    </div>
  )
}

export default StudentExam