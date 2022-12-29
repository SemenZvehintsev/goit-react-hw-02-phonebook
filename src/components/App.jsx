import { Component } from "react"
import { nanoid } from 'nanoid'

export class App extends Component {

  state = {
    contacts: [],
    name: ''
  }

  handleAddName = (event) => {
    this.setState(prevstate => prevstate.name = prevstate.name + event.target.value)
    console.log(event.target.value)
  }

  handleAddContact =(event) => {
    event.preventDefault()
    this.setState((prevstate) => {return prevstate.contacts = [...prevstate.contacts, {id: nanoid(), contactName: this.state.name}], prevstate.name = ''})
  }

  render (){
  const {contacts} = this.state;

  return (
    <div>
      <div>
        <h1>Phonebook</h1>
      </div>
      <div>
        <form action="" onSubmit={this.handleAddContact}>
          <label htmlFor="name">Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Add name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleAddName}
            required
          />    
          <button type="submit"></button>
        </form>
      </div>
      <div>
        <h2>Contacts</h2>
        <ul>{contacts.map(({id, contactName}) => <li key={id}>{contactName}</li>)}
        </ul>
      </div>
    </div>
  );}
};
