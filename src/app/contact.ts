export class Contact {
    constructor(
        public id: any,
        public fname: string,
        public lName: string,
        public emailAddress: string,
        public phone: number,
        public statusEnabled: boolean
      ) {
          this.id = id;
          this.fname = fname;
          this.lName = lName;
          this.emailAddress = emailAddress;
          this.phone = phone;
          this.statusEnabled = statusEnabled;
       }
}
