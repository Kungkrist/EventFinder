import {Injectable} from 'angular2/core';

@Injectable()
export class DateHandlerService {

  constructor() {}
  getDate(){
    var date = new Date().toLocaleDateString();
    return date;
  }

  getTime(){
    var date = new Date();
    
    var h = date.getHours();
    var m = date.getMinutes();
    var time;
    if (m < 10) {
      time = h + ":0" + m;
    }else{
      time = h + ":" + m;
    }
    
    return time;
  }

  getTimeStamp(){
    return Date.now();
  }
}
