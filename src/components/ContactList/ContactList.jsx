import { ContactItem } from "components/ContactItem/ContactItem"

export const ContactList = ({contacts, filter, onClickDelete}) => {
    return  <ul>{
    filter ? 
    contacts.filter(({contactName}) => 
    {return contactName.toLowerCase().indexOf(filter.toLowerCase()) > -1}).map(({id, contactName, contactNumber}) => 
    <ContactItem key={id} id={id} contactName={contactName} contactNumber={contactNumber} onClickDelete={onClickDelete}/>) 
    :    
    contacts.map(({id, contactName, contactNumber}) => 
    <ContactItem key={id} id={id} contactName={contactName} contactNumber={contactNumber} onClickDelete={onClickDelete}/>)}
    </ul>
}