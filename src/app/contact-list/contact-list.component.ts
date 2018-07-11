import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Contact} from '../contact';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList = [];
  constructor(private router: Router, private activateRoute: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {
    this.contactList =   this.contactService.getContactList();
  }

  addEditContact(mode, contactId?) {
    if (contactId) {
      this.router.navigate(['addEditContact'], { queryParams: { mode: mode, contactId: contactId}});
    } else {
      this.router.navigate(['addEditContact'], { queryParams: { mode: mode}});
    }
  }

  deleteContact(contactId) {
    if (confirm('Are you sure you want to delete this contact?')) {
      const index = this.contactList.findIndex(obj => obj.id === contactId);
      this.contactList.splice(index, 1);
    } else {
      return false;
    }
  }
}
