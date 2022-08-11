
import wec from "../src/images/f6.jpg";

import React from 'react'
const Donate = ()  => {
  const [username, setUsername] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [foodq, setFoodq] = React.useState('');
  const [state, setState] = React.useState('');
  const [error, setError] = React.useState(false);
  
  
  const donate = async () => {

    console.warn(!username);
    if(!username || !mobile || !email || !address || !foodq || !state)
    {
      setError(true);
    return false

    }

    console.warn(username, mobile, email, address, foodq, state);
    const userId = JSON.parse(localStorage.getItem('user'));
    let result = await fetch("http://localhost:5000/donation",{
      method: 'post',
      body: JSON.stringify({username, mobile, email, address, foodq, state, userId}),
      headers: {
        "Content-Type": "application/json"
      }
    });

    result = await result.json();
    console.warn(result);
    // localStorage.setItem("user", JSON.stringify(result))
    // navigate('/')

    
  }
  return (
      <>



<section className='contactus-section'>
<div className='container'>
  <div className='row'>
    <div className='col-12 col-lg-10 mx-auto'>
      <div className='row'>
        <div className="contact-leftside col-12 col-lg-5">
          <h1 className='donate-h1 fw-bold'>
          DONATE FOOD
          </h1>
          <figure>
            <img src={wec} alt="contactImg" className='img-fluid'/>
          </figure>
        </div>
        

        {/* Right side of contact form */}

        <div className='contact-rightside col-12 col-lg-7'>
        
         
          <div className='row'>
            <div className='col-12 col-lg-6 donate-input-field'>
              <input
               type="text" 
               name='username'
               id='username'
               required
               autoComplete="off"
               className='form-control'

               placeholder='Enter Your Full Name'
               value={username}
               onChange = {(e)=>{setUsername(e.target.value)}}
               />
             
             {error && !username && <span className='error'>Enter valid name </span>}
             </div>

            <div className='col-12 col-lg-6 contact-input-field'>
              <input
               type="number" 
               name='mobile'
               id='mobile'
               className='form-control'
               placeholder='Enter your mobile no.'
               value={mobile}
               onChange = {(e) =>{setMobile(e.target.value)}}
               />
                            {error && !mobile && <span className='error'>Enter valid mobile number </span>}

            </div>
           </div>

           <div className='row'>
            <div className='col-12 col-lg-6 contact-input-field'>
              <input
               type="text" 
               name='email'
               id='email'
               className='form-control'
               placeholder='Enter your email'
               value={email}
               onChange = {(e) =>{setEmail(e.target.value)}}
               />
               {error && !email && <span className='error'>Enter valid emaid</span>}

            </div>
   
            <div className='col-12 col-lg-6 contact-input-field'>
              <input
               type="text" 
               name='state'
               id='state'
               className= 'form-control'
               placeholder='Select your state'
               value={state}
               onChange = {(e) =>{setState(e.target.value)}}
               />
                            {error && !state && <span className='error'>Enter valid state name </span>}

            </div>
            </div>
           

            <div className='row'>
            <div className='col-12  contact-input-field'>
              <input
               type="text" 
               name='Address'
               id='Address'
               className='form-control'
               placeholder='Enter your full address'
               value={address}
               onChange = {(e) =>{setAddress(e.target.value)}}
               />
                            {error && !username && <span className='error'>Enter valid Address </span>}

            </div>
               </div>

               <div className='row'>
            <div className='col-12 contact-input-field'>
              <input
               type="text" 
               name='foodq'
               id='foodq'
               className='form-control'
               placeholder='Enter your food quantity'
               value={foodq}
               onChange = {(e) =>{setFoodq(e.target.value)}}
               />
         {error && !foodq && <span className='error'>Enter valid name </span>}

            </div>    

          </div>



          {/* <div className='row'>
            <div className='col-12 col-lg-6 contact-input-field'>
              <input
               type="number" 
               name='phone'
               id=''
               className='form-control'

               placeholder='Phone Number'
               value={userData.phone}
               onChange = {postUserData}
               />
            </div>

            <div className='col-12 col-lg-6 contact-input-field'>
              <input
               type="email" 
               name='email'
               id=''
               
               autoComplete="off"
               className='form-control'
               placeholder='Email ID'
               value={userData.email}
               onChange = {postUserData}
               />
            </div>

          </div>
          
          
         <div className='row'>
            <div className='col-12 contact-input-field'>
              <input type="text" name='address' id='' className='form-control'
               placeholder='Add Address'
               value={userData.address}
               onChange = {postUserData} />

            </div>
          </div>


          <div className= 'row'>
            <div className='col-12'>
              <input type="text" name='message' id='' className='form-control' 
              placeholder='Enter Your Message'
              value={userData.message}
               onChange = {postUserData} />

            </div>
          </div> */}

          <div class="form-check form-checkbox-style ">
<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
<label class="form-check-label" className='main-hero-para'>

I agree that the Giver may contact me at the email address or phone number mentioned above
</label>
</div>

<button onClick={donate} type = 'submit' className='btn-submit contact-input-field'>SUBMIT</button>

         
        </div>
    
      </div>
    </div>
  </div>
</div>
</section>
  </>
   
  );
}

export default Donate