import React, { useState, useEffect } from 'react'
import tech from './Images/header-img.png'
import addimage from './Images/addimage.jpeg'
import icon1 from './Images/icon1.png'
import icon2 from './Images/icon2.png'
import icon3 from './Images/icon3.png'
import icon4 from './Images/icon4.png'
import icon5 from './Images/icon5.png'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  const [formvalues, setFormvalues] = useState({ name: '', email: '', number: '' })
  const [formerrors, setFormerrors] = useState({})
  const [issubmit, setISsubmit] = useState(false)
  const changehandler = (e) => {
    setFormvalues({ ...formvalues, [e.target.name]: e.target.value })
  }
  const submithandler = (e) => {
    e.preventDefault()
    console.log(formvalues)
    setFormerrors(validate(formvalues))
    setISsubmit(true)
  }
  useEffect(() => {
    if (Object.keys(formerrors).length === 0 && issubmit) {
      console.log(formerrors)
    }
  }, [formerrors, issubmit])
  const validate = (values) => {
    const errors = {}
    const onlystrings = /^[A-Za-z\s]*$/
    const isemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.name) {
      errors.name = 'This is Field is required'
    }
    else if (!values.name.match(onlystrings)) {
      errors.name = 'Enter only alphabets'
    }
    if (!values.email) {
      errors.email = 'This is Field is required'
    }
    else if (!values.email.match(isemail)) {
      errors.email = 'This is not valid email format'
    }
    if (!values.number) {
      errors.number = 'This is Field is required'
    }
    else if (values.number.length < 10) {
      errors.number = 'Mobile number is must be 10 digit Number'
    }
    else if (values.number.length > 10) {
      errors.number = 'Mobile number cannot be more than 10 digit Number'
    }
    return errors
  }
  return (
    <>
      <div className='header'>
        <div className='header-content1'>
          <img src={tech} width='50%' height='250%' alt='techlogo' />
          <div className='text'>
            <h2>CARVING FUTURE</h2>
            <h2>TECHNOLOGY PROFESSIONALS</h2>
            <h2>OUT OF YOUNG MINDS</h2>
          </div>
        </div>
      </div>
      {/* content1 */}
      <div className='container mt-5'>

        <div className='row'>
          {/* col1 */}
          <div className='col col-md-6'>
            <h5>WHO WE ARE</h5>
            <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). </p>
            <p>Rubixe provides reliable and high-quality staffing solutions that offer you the ability to build your staff strength without absorbing them full time, assist overloaded employees during critical times, and keep projects moving. Unlike traditional staffing model, Rubixe takes the responsibility of the work being delivered through staffing engagement,</p>
          </div>
          {/* col2 */}
          <div className='col col-md-6'>
            <img src={addimage} alt='addimage' width='90%' height='90%' />
          </div>
        </div>
      </div>
      {/* content2 */}

      <div className='row'>
        <div className='col'>
          <div className='content2'>
            <h3>WHERE WE STARTED</h3>
            <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT).
              Started in 2008, providing technology solutions based in the Netherlands, founders of Rubixe™ have gained expertise in cutting-edge technology through delivering several smart city solutions for European Commission (EC) projects.</p>
          </div>
        </div>
      </div>

      {/* content3 */}
      <div className='content3'>
        <div className='row'>
          <div className='col'>

            <h4>TECH FOR TEENS-A RUBIXIE INITIATIVE</h4>
            {/* cards */}
            <div className='cards d-md-flex align-items-center'>
              {/* card1 */}

              <div className='card' style={{ width: '10rem', borderRadius: '30px' }}>

                <span style={{ 'backgroundColor': 'darkslateblue' }}><p className='card-circle'>1</p></span>

                <div className='card-body'>
                  <img src={icon1} alt='icon1' />
                  <p>Introducing AI TO Children in an age appropriate manner</p>
                </div>
              </div>
              {/* card2 */}
              <div className='card' style={{ width: '10rem', borderRadius: '30px' }}>
                <div className='card-header'>
                  <img src={icon2} alt='icon2' />
                  <p>Gain Awareness On AI  and build an interactive story around it</p>
                </div>
                <span style={{ 'backgroundColor': "rgba(173, 9, 91, 0.836" }}><p className='card-circle'>2</p></span>
              </div>
              {/* card3 */}
              <div className='card' style={{ width: '10rem', borderRadius: '30px' }}>

                <span style={{ 'backgroundColor': "orange" }}><p className='card-circle'>3</p></span>

                <div className='card-body'>
                  <img src={icon3} alt='icon3' />
                  <p>Acquire Programming Skills in a user-friendly format</p>
                </div>
              </div>
              {/* card4 */}
              <div className='card' style={{ width: '10rem', borderRadius: '30px' }}>
                <div className='card-header'>
                  <img src={icon4} alt='icon4' />
                  <p>Exposure to mini projects on diverse topics</p>
                </div>
                <span style={{ 'backgroundColor': "green" }}><p className='card-circle'>4</p></span>
              </div>
              {/* card5 */}
              <div className='card' style={{ 'width': '10rem', borderRadius: '30px' }}>
                <span style={{ 'backgroundColor': "darkgoldenrod" }}><p className='card-circle'>5</p></span>
                <div className='card-body'>
                  <img src={icon5} alt='icon5' />
                  <p>Train the Teachers programme</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* content4 */}
      <div className='content4'>
        <div className='container mt-5'>
          <div className='row border border-dark'>
            <div className='col col-md-5'>
              <div className='text1'>
                <h1>GET IN TOUCH</h1>
                <h6>Please Complete the form and will get back to you</h6>
              </div>
            </div>
            <div className="vl"></div>
            <div className='col'>
              <form onSubmit={submithandler}>
                <div class="form-group">
                  <label>Name*</label>
                  <input type="text" class="form-control" placeholder="Enter Your Name" name='name' value={formvalues.name} onChange={changehandler} />
                  <p className='text-danger'>{formerrors.name}</p>
                </div>
                <div class="form-group">
                  <label>Email*</label>
                  <input type="text" class="form-control" placeholder="Enter Your Email" name='email' value={formvalues.email} onChange={changehandler} />
                  <p className='text-danger'>{formerrors.email}</p>
                </div>
                <div class="form-group">
                  <label>Mobile Number*</label>
                  <input type="number" class="form-control" placeholder="Enter Your Mobile Number" name='number' value={formvalues.number} onChange={changehandler} />
                  <p className='text-danger'>{formerrors.number}</p>
                </div>
                <button type="submit" class="btn btn-primary btn btn-block mb-3">Register</button>
                <p className="text-center text-muted mb-0">Have already an account? <Link to='/login'
                    className="fw-bold text-body"><u>Login here</u></Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className='mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col col-md-5'>
              <p>ABOUT US</p>
              <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>
            </div>
            <div className='col col-md-2'>
              <p>MENUS</p>
              <p>Home</p>
              <p>Services</p>
              <p>Products</p>
              <p>Carrers</p>
              <p></p>
            </div>
            <div className='col col-md-2'>
              <p>LEARN MORE</p>
              <p>About</p>
              <p>Contact us</p>
            </div>
            <div className='col'>
              <p>ADDRESS</p>
              <p>Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru, Karnataka 560068</p>
              <p>Phone: 0804-717-8999</p>
              <p>Email: hi@rubixe.com</p><br />
              <p>Social MEDIA</p>
              <i className="fa-brands fa-square-facebook mr-4"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      </footer>
      {/* content5 */}
      <div className='content5'>
        <div className='row'>
          <div className='col'>
            <p>© Copyright 2017 - 2022 | Rubixe is a brand of THINK AHEAD INNOVATIONS PVT. LTD. | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home