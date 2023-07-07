import { useState } from 'react';
import './PasswordStrength.css'
import { useEffect } from 'react';

const PasswordStrength = ({password, setValid}) => {
    const [isUpperLower, setIsUpperLower] = useState(false)
    const [isDigit, setIsDigit] = useState(false)
    const [isSpace, setIsSpace] = useState(false)
    const [isSpecial, setIsSpecial] = useState(false)

      useEffect(()=>{
        function handlePasswordChange(password) {
          const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z])(?=\S+$).{1,12}$/
          // Check password strength
          const special = /^(?=.*[!@#$%^&*]).{1,12}$/
          const upperLower = /^(?=.*[a-z])(?=.*[A-Z]).{1,12}$/
          const digit = /^(?=.*\d).{1,12}$/
          const space = /^\S{1,12}$/;


        setIsSpecial(special.test(password))

        setIsUpperLower(upperLower.test(password))

        setIsDigit(digit.test(password))

        setIsSpace(space.test(password))

        setValid(isUpperLower && isDigit && isSpace && isUpperLower)
              } 
              handlePasswordChange(password)
      }, [password])

      return (
        <div className="pwd-tooltip">
    <div className="pwd-heading">
      <p className="pwd-head">Must have at least 8 characters and</p>
    </div>
  
      <div className="pwd-check">
        <span className={isUpperLower?"ok-green pwd-tick":"pwd-tick"} ><b>#</b> Upper & lower case letters</span>
        <span className={isSpecial?"ok-green pwd-tick":"pwd-tick"}><b>#</b> A symbol (#$&)</span>
        <span className={isDigit?"ok-green pwd-tick":"pwd-tick"}><b>#</b> A digit [1-9]</span>
        <span className={isSpace?"ok-green pwd-tick":"pwd-tick"}><b>#</b> No whitespaces</span>
        <div>
        </div>
      </div>
    </div>
      );
}

export default PasswordStrength