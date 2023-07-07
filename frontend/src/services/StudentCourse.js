const url = 'http://localhost:4000';

export const getCourseid = async (id) => {
    try {
      const response = await fetch(`${url}/api/studentCourses/get/studentCourses/${id}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log('error while calling get quiz by id Api', error);
    }
  };