import { Component } from "react"
import { nanoid } from 'nanoid'

export class App extends Component {

  state = {
    contacts: [],
    name: ''
  }

  handleAddName = (event) => {
    const nameItem = event.target.value;
    this.setState({name: nameItem})
  }

  handleAddContact =(event) => {
    event.preventDefault()
    this.setState(({contacts, name}) => {
      console.log(contacts, name)
      return {contacts: [...contacts, {id: nanoid(), contactName: this.state.name}], name: ''}
    })
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
