import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {Router, ActivatedRoute} from '@angular/router';
import {ContactService} from '../contact.service';
@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit {
  mode: string;
  contactDetails: Contact;
  contactList = [];
  constructor(private router: Router, private activateRoute: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {
    this.contactList = this.contactService.getContactList();
    this.activateRoute.queryParams.subscribe(params => {
      this.mode = params.mode;
      if (this.mode === 'edit') {
        this.contactDetails = new Contact(params.contactId , '', '', '', null, false);
        const details = this.contactService.getContactDetails(params.contactId);
        this.contactDetails.fname = details.firstName;
        this.contactDetails.lName = details.lastName;
        this.contactDetails.emailAddress = details.email;
        this.contactDetails.phone = details.phoneNumber;
        this.contactDetails.statusEnabled = details.status;
      } else {
        const id = parseInt(this.contactList[this.contactList.length - 1].id) + 1;
        this.contactDetails = new Contact(id.toString() , '', '', '', null, false);
      }
   });
  }

  onSave(contactDetails) {
    this.contactService.addContact(contactDetails);
    this.router.navigate([''], { queryParams: { mode: 'add' }});
  }

  onEdit(contactDetails) {
    this.contactService.editContact(contactDetails);
    this.router.navigate([''], { queryParams: { mode: 'edit' }});
  }

  cancelAddEdit() {
    this.router.navigate(['']);
  }
}
