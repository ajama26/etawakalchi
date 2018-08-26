export interface amano {
    id:number;
    firstname:string;
    lastname:string;
    phone:number;
    balance:number;
    debit:number;
    deposit:number;
    date:any; 
    customer_id:any;
    initials:any;
 }
 
 export interface check {
     id:number;
     date:string;
     customer:string;
     status:string;
     amount:number;
 }
 
 export interface cash {
     id:number;
     date:string;
     description:string;
     amount:number;
     status:any;
 }
 
 export interface amanoBalance {
     balance:number;
     id:number;
     first_name:string;
     last_name:string;
     phone:number;
     debit:number;
     deposit:number;
     date:any; 
  }
 
  export interface mid {
      total:number;
      id:number;
      firstname:string;
      lastname:string;
      phone:number;
      balance:number;
      debit:number;
      deposit:number;
      date:any; 
  }
 
  export class creds {
      password:string;
      confirm_password:string;
  }
 
  export class Employee {
    // constructor(
    //     public name: string,
    //     public position: string,
    //     public department: string,
    //     public salary: string
    // ){}
    id:number;
    firstname: string;
    lastname: string;
    phone: number;
    initials:any;
}

export class dayn_add {
    name:string;
    phone_number:number;
    amount:number;
    days:number;
    initials:any;
}

export class bal {
    id:number;
    des:string;
    amount:number;
    initials:any;
    
}

export class combine {
    id:any;
    id2:any;
    initials:any;
}

export class cashs {
    id:number;
    description:string;
    amount:number;
    status:string;
    initials:any;
}

export interface employee {
    name;
    phone;
    id;
}

export class checks {
    id:number;
    status:string;
    name:string;
    amount:number;
    customer:string;
    initials:any;
}

export class paid {
    id:number;
    paid:number;
}

export interface history {
  id:number;
  time:string;
  pertain:string;
  status:string;
  transaction:number;
  new_balance:number;  
}

export class note {
    name:string;
    message:string;
}

export class com {
    name:string;
    phone:any;
}

export class cred {
    username:string;
    password:string;
} 

export interface dayn {
    name:string;
    phone: any;
    amount: number;
    paid: number;
    balance: number;
    date:any;
    due_date:any;
    id:any;
    initials:any;
 }

 export interface logins {
    first_name:string;
    last_name: any;
    email: any;
    initials: any;
    who: any;
 }

 export interface employees {
    first_name:string;
    last_name: any;
    email: number;
    status: number;
 }

 export interface expenses_major {
     id:any;
     date:any;
     description:any;
     debit:any;
     credit:any;
     balance:any;
 }

 export interface expenses_major {
    id:any;
    date:any;
    description:any;
    description_r:any;
    debit:any;
    credit:any;
    balance:any;
    r_balance:any;
    id_customer:any;
}


export interface expenses_minor {
    id:any;
    date:any;
    description:any;
    description_r:any;
    debit:any;
    credit:any;
    balance:any;
    r_balance:any;
    id_customer:any;
}

 export class expenses {
    date:any;
    id:any;
    description:any;
    r_balance:any;
    type:any;
}

export class expenses_list {
    id:any;
    description_r:any;
    amount:any;
    type:any;
    initials:any;
}

export class expenses_debit {
    id:any;
    description_r:any;
    amount:any;
    type:any;
}

export class expenses_credit {
    id:any;
    description_r:any;
    amount:any;
    type:any;
}

 export interface ready {
    date:string;
    type: any;
    count: number;
    total: number;
    initials: number;
 }
 
 export interface directory {
     id:number;
     name:string;
     phone:any;
 }
 
 export class directories {
     id:number;
     name:string;
     phone:any;
 }
 
 export interface notes {
     id:number;
     name:string;
     phone:any;
     time:any;
 }