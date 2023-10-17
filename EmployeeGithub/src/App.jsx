import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import DataList from './DataList'
import Form from './Form'
import "./App.css"

function App() {
const [fname, setFname] = useState("")
const [lname, setLname] = useState("")
const [edu, setEdu] = useState("")
const [phone, setPhone] = useState("")
const [data, setData] = useState([])
const [error, setError] = useState("")
const formHandler = (e) => {
  e.preventDefault();
  const isPhoneExist = data.some(item => item.phone === phone);

  if (isPhoneExist) {
    setError("Phone already exist");
  } else {
    setData((currentData) => {
      return [
        ...currentData,
        {
          fname: fname,
          lname: lname,
          edu: edu,
          phone:phone,
          id: crypto.randomUUID(),
        },
      ];
    });
    setError('');
    setFname('')
    setEdu('')
    setLname("")
    setPhone("")
  }
}

  return (
    <>
    <Form 
    onSubmit={formHandler} 
    fname={fname}
    setFname={setFname}
    lname={lname}
    setLname={setLname}
    edu={edu}
    setEdu={setEdu}
    error={error}
    setError={setError}
    data={data}
    phone={phone}
    setPhone={setPhone}
  />
     
     <div className='list' >
   {data.length===0?<h3 id="data__error" >No data. Let's add some above!</h3>:<DataList data={data} />}
   
   
     </div>
    </>
  )
}

export default App
