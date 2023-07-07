const url='http://localhost:4000';

export const addcourse = async (data) => {
    try {
      const response = await fetch(`${url}/api/course/savecourses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const course = await response.json();
      return course;
    } catch (error) {
      console.log('error while calling create course api', error);
    }
  };
  
  
  
  
  
  
  

  