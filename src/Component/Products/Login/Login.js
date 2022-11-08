import React, { useState } from 'react'
import { MdHighlightOff } from 'react-icons/md'
import { useGlobalContext } from '../../../Context'
import './Login.css'

const Login = () => {
  const {userName,setUserName,loginShow,setLoginShow} = useGlobalContext()
    const [loginBtn, setLoginBtn] = useState(false)
    const [infoUser,setInfoUser] = useState({})
    const [name,setName] = useState('')
    const [pass,setPass] = useState('')
    const [email,setEmail] = useState('')
    let info = {
      userName: name,
      email: email,
      password: pass
    }
    const handelSubmit = (e)=> {
      e.preventDefault()
      setInfoUser(info)
      setName('')
      setPass('')
      setEmail('')
      if(loginBtn){
        localStorage.setItem(info.userName,JSON.stringify(info))
        setUserName(info.userName)
        console.log(userName)
        setLoginShow(false)
      }else {
        const person = JSON.parse(localStorage.getItem(infoUser.userName))
        if(person){
          const name = person.userName
          const pass = person.password
          if(info.userName === name && info.password === pass){
            setUserName(name)
            setLoginShow(false)
          }
        }else{
          alert('try agin')
        }
      }
    }
  if(loginShow){
    return (
    <div className='login-center'>
        <div className='login-front'>
            <h1>{loginBtn ? 'Sign Up' : 'Login'}<span onClick={()=> setLoginShow(false)}><MdHighlightOff/></span></h1>
            <form onSubmit={(e)=> handelSubmit(e)}>
                <input type='text' placeholder='UserName'required value={name} onChange={(e)=> setName(e.target.value)}/>
                <input type='password' placeholder='Password' required value={pass} onChange={(e)=> setPass(e.target.value)}/>
                {loginBtn ? <input  type='email' placeholder='Email' required value={email} onChange={(e)=> setEmail(e.target.value)} /> : ''}
                <input type='submit' value={loginBtn ? 'Sign Up' : 'Login'}  />
            </form>
            <p>{loginBtn ? 'Already a user' : 'Need an account?'}</p>
            <button className='sign-up' 
            onClick={()=> setLoginBtn(!loginBtn)}>{loginBtn ? 'Login' : 'Sign Up'}</button>
        </div>
    </div>
  )
  }
}

export default Login