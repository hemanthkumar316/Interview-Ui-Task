import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from'axios'
const Loginpage = () => {
  const [form, setForm] = useState({ email:'', password:'' })
  const [formerrors,setFormerrors]=useState({})
  const [issubmit,setISsubmit]=useState(false)
  const changehandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const submithandler = (e) => {
    e.preventDefault()
    console.log(form)
    setFormerrors(validate(form))
    setISsubmit(true)
    /* setForm(e.target.reset()) */
   }
  useEffect(() => {
   if(Object.keys(formerrors).length===0 && issubmit){
    console.log(form)
}
  }, [form])
  const validate=(values)=>{
    const errors={}
    const isemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!values.email){
      errors.email='This is field is required'
    }
    else if (!values.email.match(isemail)) {
      errors.email='This is not valid email format'
    }
    if(!values.password){
      errors.password='This is field is required'
    }
    else if(values.password.length<4){
      errors.password='password must be more than  4 chars'
    }
    else if(values.password.length>8){
      errors.email='password  cannot be exceed more than 8 chars'
    }
    return errors
  }
  return (
    <div className='container mr-5 mt-5'>
    <h1 className='bg-secondary text-white text-center'>WELCOME TO LOGIN PAGE</h1>
      <div className='row'>
        <div className='col col-md-6'>
          <div className='card'>
            <div className='card-header bg-info'>
              <h1 className='text-center text-white'>LOGIN FORM</h1>
            </div>
            <div className='card-body'>
              <form onSubmit={submithandler}>
                <div className='form-group'>
                  <input type='text' className='form-control' placeholder='Enter Your Email' name='email' value={form.email} onChange={changehandler} />
                <p className='text-danger'>{formerrors.email}</p>
                </div>
                <div className='form-group'>
                  <input type='text' className='form-control' placeholder='Enter Your Password' name='password' value={form.password} onChange={changehandler} />
                  <p className='text-danger'>{formerrors.password}</p>
                </div>
                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label"> Remember me </label>
                    </div>
                  </div>
                  <div className="col">
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                <div className="d-flex justify-content-center">
                <button type='submit' className='btn btn-primary btn-lg mr-4'>Login</button>
               
                </div>
                <div className="text-center">
                  <p>Not a member?  <Link to='/'>Register</Link></p>
                  <p>or sign up with:</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginpage