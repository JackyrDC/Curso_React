import React, { useState } from 'react'
import GuideData from './components/GuideData'
import PhonesRender from './components/PhonesRender'

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

    setPersons(persons.concat(NumberObject))
    setNewName("")
    setEmail("")
    setPhone("")
  }

  const handleChangeNumber = (event) =>{
    event.preventDefault()
    setPhone(event.target.value)
  }

  const handleChangeName = (event)=>
  {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleChangeMail = (event) => {
    event.preventDefault()
    setEmail(event.target.value)
  }

  return (
    <div>
      <h2>Guía Telefónica</h2>
      <form>
        <div>
          name: <input onChange={handleChangeName} />
        </div>
        <div>
          Phone number: <input type="tel" pattern='+504 [0-9]{4}-[0-9]{4}' onChange={handleChangeNumber}/>
        </div>
        <div>
          Email: <input type="email" onChange={handleChangeMail} />
        </div>
        <div>
          <button type="submit" onSubmit={handleNewNumber}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div> 
        {
          persons.map(person => 
              <PhonesRender key= {person.id} name = {person.name} phoneNumber = {person.phoneNumber} email = {person.email} />
            )
        }
      </div>
    </div>
  )
}

export default App