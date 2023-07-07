import React,{useState} from 'react'
import  "./DepartmentView.css"
import bell from '../../assets/NotificationRed.svg'
import mail from '../../assets/blackemail.svg'
import phone from '../../assets/phone.svg'
import Toggle from '../ToggleTable/Toggle'
import DeletePop from '../DeletePopUP/DeletePop'

export default function DepartmentView() {
  const [del,setDel] = useState(false);
  return (
   
    <div className="DepartmentView">
       {del && <DeletePop setDel = {setDel}/>}
        <div className="View__header">
            <span>Department</span>
            <img src={bell} alt="" />
        </div>
<div className="DepartmentView_desc">

  <span className='depart_name'>Department of Computer Science & Engineering</span>
  <span className='Head__name'>Head Of Department: <small>Ronik Mishra</small></span> 
  <span className='depart__Contact'><img src={mail} alt="" /> Example@gmail.com</span>
  <span className='depart__Contact'><img src={phone} alt="" /> 35634665445</span>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati, 
    quaerat minima aut neque mollitia nostrum necessitatibus ex laboriosam, 
    corporis totam facilis blanditiis! Placeat similique, ducimus necessitatibus 
    repellat nesciunt ratione commodi, dolores 
    saepe quidem cum quos molestiae minima dignissimos,
     molestias reprehenderit iste esse maxime soluta minus quod n
     isi labore distinctio!</p>




<div className="Depart_table">
<Toggle/>
    
</div>
     
</div>

    </div>
  )
}
