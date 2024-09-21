const { v4: uuid } = require("uuid");

let contacts = [
  {
    id: uuid(),
    name: "Fledson",
    email: "fledson@gmail.com",
    phone: "123123132123",
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: "Gleyce",
    email: "Gleyce@gmail.com",
    phone: "123123132123",
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: "Zaion",
    email: "Zaion@gmail.com",
    phone: "123123132123",
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: "Lunna",
    email: "Lunna@gmail.com",
    phone: "123123132123",
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolver) => {
      resolver(contacts);
    });
  }

  findById(id) {
    return new Promise( resolver => {
      resolver(contacts.find( contact => contact.id === id));
    });
  }

  findByEmail(email) {
     return new Promise( resolver => {
      resolver(contacts.find( contact => contact.email === email));
    });
  }

  create({ name, email, phone, category_id }) {
    return new Promise( resolver => {

      const contact = {
        id: uuid(),
        name,
        email,
        phone,
        category_id
      };

      contacts.push(contact);
      resolver(contact);
    });
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise( resolver => {

      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id
      };

      contacts = contacts.map( ctt => (
        ctt.id === id ? updatedContact : ctt
      ));

      resolver(updatedContact);
    });
  }

  delete(id) {
    return new Promise( resolver => {
      contacts = contacts.filter(ctt => ctt.id !== id);
      resolver();
    });
  }
}

module.exports = new ContactRepository();
