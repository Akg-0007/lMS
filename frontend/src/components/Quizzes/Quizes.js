import React from 'react'
import './Quizzes.css'
import eye from '../../assets/eve1.svg'
import delete1 from '../../assets/deleteicon.svg'
import edit from '../../assets/editicon.svg'
import plus from '../../assets/plus.svg'
import updown from '../../assets/updown.svg'
import left from '../../assets/leftArrow.svg'
import right from '../../assets/RightArrow.svg'
import { useState ,useEffect} from 'react'
import { useNavigate,NavLink } from 'react-router-dom'
import { delquiz,  } from '../../services/createquizService'




const Quizes = () => {
  

    const[show,handleshow]=useState("false");
    // const[showPop,handleshowPop]=useState("false");
    const Navigate=useNavigate();
    const[quizes,setquizes]=useState([])
    const [searchQuery, setSearchQuery] = useState("");
    const [sort, setSort] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [limit, setLimit] = useState(10);

 

    
    const handlePrevClick = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };
  
    const handleNextClick = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
    useEffect(()=>{
      if(sort === "Name") {
        setquizes(quizes.sort((a, b) => a.title.localeCompare(b.title)));
      }
      if(sort === "Course") {
        setquizes(quizes.sort((a, b) => a.section.localeCompare(b.section)));
      }
    }, [sort])
    
    
     const getallquiz = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/createquiz/all?page=${currentPage}&limit=${limit}`);
        const data = await response.json();
    console.log(data.users,"resdf")
        
      setquizes(data.users);  
      setTotalPages(data.totalPages);
      setTotalRecords(data.totalRecords);
      return data.users;

      } catch (error) {
        console.log('error while calling get quiz Api', error);
      }
    };
    useEffect(()=>{
      getallQ();
        },[limit,currentPage])
    const getallQ=async()=>{
        const resp=await getallquiz();
        
        setquizes(resp);
    }
    const del=async(id)=>{
      await delquiz(id)
      getallQ();
    }
    const search = (e) => {
      setSearchQuery(e.target.value);
    }
   
    const filteredQuizzes = quizes && quizes.filter((quiz) => {
      const title = quiz.title ? quiz.title.toLowerCase() : ''; 
      const section = quiz.section ? quiz.section.toLowerCase() : ''; 
      return (
        title.includes(searchQuery.toLowerCase()) || 
        section.includes(searchQuery.toLowerCase()) 
      );
    });
    console.log(quizes,"setquixcvbn")
  return (
    <div className="main-quiz">
              

        <div className='upper_header'>
      
        <h2 className='page_title'>Quizzes</h2>
      
      {/* <div className='table-buttons' > */}
       
        
          <button
            className="Btn  Btn--primary button__group"
            onClick={()=>{Navigate('./popupcomp')}} >
            Create <img src={plus}  alt="" />
          </button>
        
     
      {/* </div> */}
  </div>
  <div className="card">
      <div className="table-content">
        
      <div className="search-bar">

<input type={"search"} placeholder="Search" className="search-form" onChange={search}
/>

</div>     
 <table  className="table">
 
    <thead >
      <th className='updown-icon'  onClick={()=>setSort("Name")}>Name<img src={updown}/></th>
      <th className='updown-icon'  onClick={()=>setSort("Course")}>Course<img src={updown}/></th>
      <th className='updown-icon'>Created by<img src={updown}/></th>
      <th className='updown-icon'>Total Marks<img src={updown}/></th>
      <th className='updown-icon'>Total Questions<img src={updown}/></th>
      
      <th>Action</th>
      {/* {show?<th></th>:null }  */}

      
    </thead>
    <tbody>
    {filteredQuizzes && filteredQuizzes.map((e)=>
    <tr className='tr-quizeees' key={e._id}>
      <td className='quizzes-tit'>{e.title}</td>
      <td>{e.section}</td>
      <td>Dr. Alok Jain</td>      
      <td className='quizees-marks'>30</td>      
      <td className='quizees-marks'>30</td> 
       
      <td>
      <div className='iconflex'>
        <a title='view' className='table_view'><img src={eye} alt="" onClick={()=>Navigate(`./preview/${e._id}`)}  /></a>
        <a title='view' className='table_view'> <img src={edit} alt="" onClick={()=>Navigate(`./popupedit/${e._id}`)}  />  </a>   
        <a title='view' className='table_view'><img src={delete1} alt="" onClick={()=>del(e._id)} /></a>
      </div>
      </td>     
      {/* {show?<td>edfsd</td>:null }     */}
    </tr>)}

   

    
    </tbody>
    
        </table>
      </div>
      
      </div>
      {/* {showPop && } */}
      <div className='pagination'>
      <span className='pagination-title'>
           {currentPage} of {totalPages} {totalRecords} 
        </span>
        <div className="pagination_button">
        <button className='Btn Btn--outline arrowbt' onClick={handlePrevClick} disabled={currentPage === 1}>
          <img src={left} alt="" />
        </button>
       <span className='Btn Btn--primary arrowbt'> {currentPage} </span>
        <button className='Btn Btn--outline arrowbt' onClick={handleNextClick} disabled={currentPage === totalPages}>
        <img src={right} alt="" />

        </button></div>
      </div>

</div>
  )
}

export default Quizes
