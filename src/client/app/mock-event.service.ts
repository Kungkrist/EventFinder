import {Injectable} from 'angular2/core';
import {EVENTS} from './mock-events';

@Injectable()
export class MockEventService {

  constructor() {
  }
  
  getEvents() {
    return Promise.resolve(EVENTS);
  }
}


  