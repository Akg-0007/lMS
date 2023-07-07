const BASE_URL = 'http://localhost:4000';

async function getAll() {
  try {
    const response = await fetch(`${BASE_URL}/api/quiz/questions`);
    const data = await response.json();
    console.log(data,"question in quiz");
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function get(id) {
  try {
    const response = await fetch(`${BASE_URL}/api/quiz/quest/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function create(data,id) {
  try {
    const response = await fetch(`${BASE_URL}/api/quiz/question/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      
    });
    if (!response.ok) {
      throw new Error(`Failed to add questions: ${response.status}`);
    }
    const newData = await response.json();

    return newData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function editquiz(id, data) {
  try {
    const response = await fetch(`${BASE_URL}/api/quiz/all/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const updatedData = await response.json();
    return updatedData;
  } catch (error) {
    console.error(error);
  }
}

async function deleteQuiz(id) {
  try {
    const response = await fetch(`${BASE_URL}/api/quiz/all/${id}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export {
  getAll,
  get,
  create,
  editquiz,
  deleteQuiz,
};
