import React, {useState} from 'react'
import './AdminDropdown.css'
import down from '../../../assets/downbold.svg'


const AdminDropdown = ({ options ,name,background,width,border, setState }) => {
  const [isActive, setActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const toggleClass = () => {
    setActive(!isActive);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setActive(false);
  };
        return (
          <div className="dropdown" style={{width:width, border:border}} >
          <button className="dropdown-toggle" style={{background:background}}  type="button" onClick={toggleClass}>
            <div className='dropdown-arrow'>
          {selectedOption || name}
            
          <span className='down-2'></span>
          <img src={down} alt="arrow" className={`arrow-icon ${isActive ? 'arrow-icon-active' : ''}`} />
    
          </div>
           
          </button>
          <ul className={isActive ? 'dropdown-menu show' : 'dropdown-menu'} style={{background:background}}>
            {options && options.map((option, index) => (
              <li key={index} className="dropdown-item" onClick={() => {
                setState(option) 
                handleOptionClick(option)
                }}>
                {option}
               
                {index !== options.length - 1 && <hr className='dropdown-hr'/>}
              </li>
            ))} 
          </ul>
        </div>
          );
                  };
                
                  export default AdminDropdown;