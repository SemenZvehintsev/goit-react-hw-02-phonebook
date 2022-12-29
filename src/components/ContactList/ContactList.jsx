export const ContactList = ({contacts}) => {
    return  <ul>{contacts.map(({id, contactName, contactNumber}) => <li key={id}>{contactName}: {contactNumber}</li>)}
    </ul>
}