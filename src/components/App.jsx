import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";


export class App extends Component {

  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  handleAdd = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  handleAddContact = (event) => {
    event.preventDefault()
    this.setState(({contacts}) => {
      return {contacts: [...contacts, {id: nanoid(), contactName: this.state.name, contactNumber: this.state.number}], 
      name: '', 
      number: ''}
    })
  }

  handleFilter = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
    return this.state.contacts.filter(({contactName}) => {return contactName.toLowerCase().indexOf(value.toLowerCase()) > -1})
  }

  render (){
  const {contacts, filter, name, number} = this.state;

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm name={name} number={number} onChangeAdd={this.handleAdd} onSubmitAdd={this.handleAddContact}/>

      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={this.handleFilter}/> 
      <ContactList contacts={contacts}/>

      {/* <div>
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
          <label htmlFor="tel">Number
          </label>
          <input
            type="tel"
            name="number"
            id="tel"
            placeholder="Add number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleAddName}
            required
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
      <div>
        <h2>Contacts</h2>
        <label htmlFor="filter">Find contacts by name</label>
        <input type="text" id="filter" name="filter" value={this.state.filter} onChange={this.handleFilter}/>
        <ul>{contacts.map(({id, contactName, contactNumber}) => <li key={id}>{contactName}: {contactNumber}</li>)}
        </ul>
      </div> */}
    </div>
  );}
};
