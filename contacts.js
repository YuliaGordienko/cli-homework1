// const fs = require("fs/promises");
// const path = require("path");
// const crypto = require("crypto");
// const PATH = path.join(__dirname, "db/contacts.json");
// const readData = async () => {
//   const result = await fs.readFile(PATH, "utf8");
//   return JSON.parse(result);
// };
// const listContacts = async () => {
//   return await readData();
// };

// const getContactById = async (contactId) => {
//   const contacts = await readData();
//   const [result] = contacts.filter(
//     (contact) => String(contact.id) === String(contactId)
//   );
//   return result;
// };

// const removeContact = async (contactId) => {
//   const contacts = await readData();
//   const contactForRemove = contacts.find(
//     (contact) => String(contact.id) === String(contactId)
//   );
//   const result = contacts.filter(
//     (contact) => String(contact.id) !== String(contactId)
//   );

//   await fs.writeFile(PATH, JSON.stringify(result, null, 2));
//   return contactForRemove;
// };

// const addContact = async (name, email, phone) => {
//   const contacts = await readData();
//   const newContact = { id: crypto.randomUUID(), name, email, phone };
//   contacts.push(newContact);
//   await fs.writeFile(PATH, JSON.stringify(contacts, null, 2));
//   return newContact;
// };
// module.exports = { listContacts, getContactById, removeContact, addContact };
