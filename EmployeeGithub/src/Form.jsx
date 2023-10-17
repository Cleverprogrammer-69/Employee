// import React from 'react
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Form.css"
function Form({onSubmit,fname,setFname,lname,setLname,edu,setEdu,error,phone,setPhone}) {

  return (
    <div className='container-fluid'>
        <h2>Registration Form</h2>
        <form className='my__form' onSubmit={onSubmit} >
          <div className="row py-1" >
            <div className="col-md-1">
               <label htmlFor="fname">First name: </label>
            </div>
            <div className="col-md-6">
              <input className="form__input" type="text" name='fname' value={fname} onChange={(e)=>setFname(e.target.value)} required />
                {/* <p id='error'>{error}</p> */}

            </div>
            
          </div>
      
     
      <div className="row py-1">
      <div className="col-md-1">
         <label htmlFor="lname">Last name: </label>
      </div>
      <div className="col-md-6">
         <input className="form__input" type="text" name='lname' value={lname} onChange={(e)=>setLname(e.target.value)} required />
      </div>
      
      </div>
      
     <div className="row py-1">
     <div className="col-md-1">
        <label htmlFor="edu">Education: </label>     
    </div>
    <div className="col-md-6">
      <input className="form__input" type="text" name='edu' value={edu} onChange={(e)=>setEdu(e.target.value)} required />
    </div>
      
     </div>
     <div className="row py-1">
     <div className="col-md-1">
        <label htmlFor="phone">Phone number: </label>     
    </div>
    <div className="col-md-6">
      <input className="form__input" type="number" name='edu' value={phone} onChange={(e)=>setPhone(e.target.value)} required />
    </div>
      
     </div>
     {error && <div className="text-danger">{error}</div>}
     <div className="row py-1">
     <div className="col-md-1">
        
    </div>
    <div className="col-md-6">
    <button className='submit__btn py-1' type='submit'>Register</button>
    </div>
      
     </div>
      
     </form>
    </div>
  )
}

export default Form