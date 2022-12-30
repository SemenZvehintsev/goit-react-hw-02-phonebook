export const ContactItem =({id, contactName, contactNumber, onClickDelete})=> {
    return <li>{contactName}: {contactNumber} 
    <button type="button" onClick={() => onClickDelete(id)}>Delete</button> 
    </li>
}