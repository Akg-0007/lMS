import React,{useState} from 'react'
import './AdminPermission.css'
import Dropdown from '../../../components/dropdown/Dropdown'

export default function AdminPermission() {


    const [open, setopen] = useState('');
    const [hel, setHel] = useState();
    const Department = [
        'Dashboard',
        'Users',
        'Department', 
    ];
const tech = [
    'Dashboard',
    'Course',
    'Attendance'
]

const stu = [
    'Dashboard',
    'Course',
    'Assessment'
]
    const handleopen = (e) => {
        setopen(e);
    };

  return (
    <>
    <div className="AdPer">
      <table className='ADPerTable table'>
        <thead>
            <th className='ADPerTable_head'>Manage Permission</th>
            <th></th>
        </thead>
        <tbody>
<tr>
  <td>  Allow Teacher to upload learning material  </td> 
  <td><input type="checkbox"/></td>
</tr>
<tr>
<td>  Allow Teacher to edit their profile  </td> 
  <td><input type="checkbox"/></td>

</tr>
<tr>
<td>  Allow Teacher to edit their profile  </td> 
  <td><input type="checkbox"/></td>

</tr>
<tr>
    <td>Admin Login redirect page</td>
    <td>
    <Dropdown
                            name={'Select'}
                            options={Department}
                            onSelect={handleopen}
                            width={'437px'}
                            setState={setHel}
                        />
    </td>
</tr>
<tr>
    <td>Teacher Login redirect page</td>
    <td>
    <Dropdown
                            name={'Select'}
                            options={tech}
                            onSelect={handleopen}
                            width={'437px'}
                            setState={setHel}
                        />
    </td>
</tr>

<tr>
    <td>Student Login redirect page</td>
    <td>
    <Dropdown
                            name={'Select'}
                            options={stu}
                            onSelect={handleopen}
                            width={'437px'}
                            setState={setHel}
                        />
    </td>
</tr>
        </tbody>
      </table>
      </div>
    </>
  )
}
