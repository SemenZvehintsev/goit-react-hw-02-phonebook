export const ContactForm = ({name, number, onChangeAdd, onSubmitAdd}) => {
    return <form action="" onSubmit={onSubmitAdd}>
        <label htmlFor="name">Name
        </label>
        <input
        type="text"
        name="name"
        id="name"
        placeholder="Add name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onChangeAdd}
        required
        />    
        <label htmlFor="tel">Number
        </label>
        <input
        type="tel"
        name="number"
        id="tel"
        placeholder="Add number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={onChangeAdd}
        required
        />
        <button type="submit">Add contact</button>
    </form>
}