import { useState } from 'react'
import GuideData from './components/GuideData'
import Phone from './components/PhonesRender'

const App = () => {
  const [ persons, setPersons ] = useState(GuideData) 
  const [ newName, setNewName ] = useState('')
  const [ phone, setPhone ] = useState('') 
  const [ email, setEmail] = useState('')

  const handleNewNumber = (event) => {
    event.preventDefault()
    const NumberObject = {
      id: persons.lenght + 1,
      name: newName,
      phoneNumber: phone,
      email: email
    }

    console.log(NumberObject)
    const nameAlreadyExists = persons.some((person) => person.name === newName);

    if(nameAlreadyExists)
    {
      alert('${newName} actually exist between your contacts')
    }
    else{
      setPersons(persons.concat(NumberObject))
      setNewName("")
      setEmail("")
      setPhone("")
    }


  }

  const handleChangeNumber = (event) =>{
    setPhone(event.target.value)
  }

  const handleChangeName = (event)=>
  {
    setNewName(event.target.value)
  }

  const handleChangeMail = (event) => {
    setEmail(event.target.value)
  }


  return (
    <div className = "phoneform">
      <h2>Guía Telefónica</h2>
      <form onSubmit={handleNewNumber}>
        <div className='inputs' >
          name: <input id="input" onChange={handleChangeName} />
        </div>
        <div className='inputs' >
          Phone number: <input id="input" type="tel" onChange={handleChangeNumber}/>
        </div>
        <div className='inputs' >
          Email: <input id="input" type="email" onChange={handleChangeMail} />
        </div>
        <div className='inputs' >
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div> 
        {
          persons.map(person => 
              <Phone key= {person.id} name = {person.name} phoneNumber = {person.phoneNumber} email = {person.email} />
            )
        }
      </div>
    </div>
  )
}

export default App