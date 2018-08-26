import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(amano: any, phone: any): any {
    if(phone === undefined || phone === null){
      return amano;
    }

    return amano.filter(function(x){
      return x.phone.includes(phone);
    })

  

  }

}

@Pipe({
  name: 'amFil'
})
export class AmFilPipe implements PipeTransform {

  transform(all: any, value: any): any {
    if(value == null || value == undefined || value == 'All'){
      return all[0];
    } else {
      return all[1];
    }
  }

}

@Pipe({
  name: 'amfilter'
})
export class AmfilterPipe implements PipeTransform {

  transform(amano: any, value: any): any {
    if(value === null || value === undefined || value === 'All'){
      return amano;
    } else {
      return amano.filter(function(x){
        return x.r_balance < 0;
      })
    }
  }

}

@Pipe({
  name: 'app'
})
export class AppPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

@Pipe({
  name: 'entry'
})
export class EntryPipe implements PipeTransform {

  transform(value: any, amano: any): any {
   if(value === 3124093514){
     alert('this is abshir phone')
   } 
  }

}

@Pipe({
  name: 'fil'
})
export class FilPipe implements PipeTransform {

  transform(value: any, one: any): any {
    if(one == null || one == undefined || one == 'All' || one == 'In Hand'){
      return value[0];
    } else if (one == 'Approved') {
      return value[1]; 
    }
  }

}

@Pipe({
  name: 'filt'
})
export class FiltPipe implements PipeTransform {

  transform(amano: any, value: any): any {
    if(value === null || value === undefined || value === 'All'){
      return amano;
    } else {
      return amano.filter(function(x){
        return x.balance < 0;
      })
    }
  }

}

@Pipe({
  name: 'filterCashDes'
})
export class FilterCashDesPipe implements PipeTransform {

  transform(cash: any, one: any): any {
    if(one === null || one === undefined){
      return cash;
    } else {
      return cash.filter(function(x){
        return x.description.toUpperCase().includes(one.toUpperCase());
      })
    }
  }

}

@Pipe({
  name: 'filterCash'
})
export class FilterCashPipe implements PipeTransform {

  transform(cash: any, one: any): any {
    if(one === null || one === undefined || one === 'All'){
      return cash;
    } else {
      return cash.filter(function(x){
        return x.date > (Date.now()/1000) - 86400;
      })
    }
  }

}

@Pipe({
  name: 'filterCheckOne'
})
export class FilterCheckOnePipe implements PipeTransform {

  transform(check: any, labo: any): any {
    if(labo === null || labo === undefined || labo === 'All'){
      return check;
    }else {
      return check.filter(function(x){
        return x.status == labo;
      })


  }
  }
}

@Pipe({
  name: 'filterCheckTwo'
})
export class FilterCheckTwoPipe implements PipeTransform {

  transform(check: any, one: any): any {
    if(one === null || one === undefined){
      return check;
    } else {
      return check.filter(function(x){
        return x.customer.toUpperCase().includes(one.toUpperCase());
      })
    }
  }

}

@Pipe({
  name: 'filter_dayn'
})
export class FilterPipe_dayn implements PipeTransform {

  transform(all: any, value: any): any {
    if(value == null || value == undefined || value == 'All'){
      return all[0];
    } else {
      return all[1];
    }
  }

}

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(amano: any, value: any): any {
    if(value === null || value === undefined || value === 'All'){
      return amano;
    } else {
      return amano.filter(function(x){
        return x.due_date < Date.now()/1000;
      })
    }
  }

}


@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {
  vice = 0;
  transform(check: any, value: any): any {
  if(value == null || value == undefined || value == 'All'){
    return check[0];
  } else if (value == 'Pending') {
    return check[1];
  } else if (value == 'Deposited'){
    return check[2];
  } else if (value == 'Approved'){
    return check[3];
  }
  }
}





