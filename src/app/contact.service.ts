import {Injectable} from '@angular/core';

@Injectable()
export class ContactService {
    url = 'localapi/mock-contact-list.json';
    contactList = [
        {id: '1', firstName: 'john', lastName: 'Doe', email: 'johndoe@gmail.com', phoneNumber: 9623818555, status: true},
        {id: '2', firstName: 'Mary', lastName: 'pas', email: 'marry@gmail.com', phoneNumber: 9623818555, status: true},
        {id: '3', firstName: 'mark', lastName: 'vissley', email: 'markvissley@gmail.com', phoneNumber: 9623818555, status: false},
        {id: '4', firstName: 'jack', lastName: 'dooley', email: 'jack@gmail.com', phoneNumber: 9623818555, status: false}
      ];

    constructor() { }

    getContactList(): any {
        return this.contactList;
    }

    getContactDetails(contactId) {
        return this.contactList.find(function (obj) { return obj.id === contactId; });
       }

    addContact(contactDetails) {
        this.contactList.push({id: contactDetails.id, firstName: contactDetails.fname,
            lastName: contactDetails.lName, email: contactDetails.emailAddress,
            phoneNumber: contactDetails.phone, status: contactDetails.statusEnabled});
    }

    editContact(contactDetails) {
        const index = this.contactList.findIndex(obj => obj.id === contactDetails['id']);
        this.contactList[index].firstName =  contactDetails['fname'];
        this.contactList[index].lastName =  contactDetails['lName'];
        this.contactList[index].email =  contactDetails['emailAddress'];
        this.contactList[index].phoneNumber =  contactDetails['phone'];
        this.contactList[index].status =  contactDetails['statusEnabled'];
    }
}
