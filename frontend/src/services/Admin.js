const BASE_URL = 'http://localhost:4000';
export const fetchStudents = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/admin/showStudents`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Unable to get all students:', error);
    }
  };


  export const deleteStudent = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/api/admin/deleteStudent/${id}`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        console.log('Student deleted successfully');
      } else {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
      }
    } catch (error) {
      console.error('Error deleting student:', error.message);
    }
  };
  
  export const editStudent = async (id, updatedStudent) => {
    try {
      const response = await fetch(`${BASE_URL}/api/admin/editStudent/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedStudent)
      });
  
      if (response.ok) {
        const editedStudent = await response.json();
        console.log('Student edited successfully:', editedStudent);
        return editedStudent;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error('Error editing student:', error);
      throw error;
    }
  };
  export const fetchStudentById = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/api/admin/getStudentById/${id}`);
      if (!response.ok) {
        throw new Error("Unable to fetch student data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  