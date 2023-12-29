import React from 'react'
import './Login.css'
import Input from './Input.jsx'
import Btn from './Btn.jsx'


//login is the parent component. 
//The parent component having the data that need to be passed into the child component.
function Login() {
  return (
    <div className='box'>
        <Input label={'First_Name'} type={'text'}/>
        <Input label={'Last_Name'} type={'text'}/>
        <Input id='email' label={'Email'}    type={'email'}/>
        <Input label={'Student_id'}   type={'number'}/>
        <Input label={'Number'}   type={'number'}/>

        <Btn/>
    </div>

  )
}

export default Login