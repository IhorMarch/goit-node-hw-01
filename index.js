const contacts = require('./contacts');
const argv = require('yargs').argv;


const invokeAction = async ({ action, id, name, email, phone }) => {
      
switch (action) {
    case 'list':
    const allContacts = await contacts.listContacts();
    return console.table(allContacts);

    case 'get':
    const contactId = await contacts.getContactById(id);
            return console.log(contactId);

    case 'add':
     const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);

    case 'remove':
      const deleteContact = await contacts.removeContact(id);
            return console.log(deleteContact);
    
      case "updateById":
            const updateContact = await contacts.updateContactBtId(id, {name, email,phone});
            return console.log(updateContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }

}

invokeAction(argv);
