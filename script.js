let contacts = [
    { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" },
    { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" },
    { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" }
];

const displayContacts = (contact) => {
    const contactList = document.getElementById('contact-list');
    const contactElement = document.createElement('p');
    contactElement.textContent = `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`;
    contactList.appendChild(contactElement);
};

const addContact = () => {
    let name = prompt("Enter contact name:");
    let phone = prompt("Enter contact phone number:");
    let email = prompt("Enter contact email:");
    let newContact = { name, phone, email };
    contacts.push(newContact);
    setTimeout(() => displayContacts(newContact), 1000); // Simulate delay
};

const startAddingContacts = () => {
    let addMore;
    do {
        addContact();
        addMore = prompt("Do you want to add another contact? (yes/no)").toLowerCase();
    } while (addMore === "yes");
};

const findContact = (name) => {
    const contact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (contact) {
        alert(`Found Contact - Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
    } else {
        alert("Contact not found!");
    }
};

const recursiveSearch = (name, index = 0) => {
    if (index >= contacts.length) {
        alert("Contact not found!");
        return;
    }
    if (contacts[index].name.toLowerCase() === name.toLowerCase()) {
        alert(`Found Contact - Name: ${contacts[index].name}, Phone: ${contacts[index].phone}, Email: ${contacts[index].email}`);
        return;
    }
    recursiveSearch(name, index + 1);
};

const changeBackgroundColor = () => {
    const colors = ["#ff9999", "#99ff99", "#9999ff", "#ffcc99"];
    let index = 0;
    setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 3000); // Change background color every 3 seconds
};

window.onload = () => {
    contacts.forEach(contact => displayContacts(contact));
    setInterval(() => console.log(`Total Contacts: ${contacts.length}`), 5000);
    changeBackgroundColor();
};
