const BASE_URL = 'http://localhost:4000';

async function getAllAssigment() {
  try {
    const response = await fetch(`${BASE_URL}/api/assessment/assignment/all`);
    const data = await response.json();
    console.log(data,"question in quiz");
    return data;
  } catch (error) {
    console.error(error);
  }
}
async function getAssignmentsById(id) {
    try {
      const response = await fetch(`${BASE_URL}/api/assessment/assignment/all/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async function getAssignmentsSubById(id) {
    try {
      const response = await fetch(`${BASE_URL}/api/assessment/assignment/submit/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  const updateAssignmentFile = async (id, file, status) => {
    const response = await fetch(`${BASE_URL}/api/assessment/assignment/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        file: file,
        status: status
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const updatedAssignment = await response.json();
    return updatedAssignment;
  };
  


export {
    getAllAssigment,getAssignmentsById,getAssignmentsSubById,updateAssignmentFile
   
  };