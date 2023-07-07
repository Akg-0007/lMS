const url = 'http://localhost:4000';

export const addQuiz = async (data) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_LMS_BACKEND_API}/createquiz/addd`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
      });
      console.log(data)
      if (!response.ok) {
        throw new Error(`Failed to add quiz: ${response.status}`);
      }
  
      const json = await response.json();
      const quizId = json.quizId;

      console.log('Quiz added:', json,quizId);
       return quizId;
    } catch (error) {
      console.log('Error adding quiz:', error.message);
      throw error;
    }
  };
  

export const getallquiz = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_LMS_BACKEND_API}/createquiz/all`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('error while calling get quiz Api', error);
  }
};

export const getquizid = async (id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_LMS_BACKEND_API}/createquiz/${id}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('error while calling get quiz by id Api', error);
  }
};

export const editquiz = async (user, id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_LMS_BACKEND_API}/createquiz/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('error while calling editquiz api', error);
  }
};

export const delquiz = async (id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_LMS_BACKEND_API}/createquiz/${id}`, {
      method: 'DELETE'
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('error while calling delquiz api', error);
  }
};
