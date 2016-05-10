export interface Event {
  name: string,
  date: string,
  timeStart: string,
  timeEnd: string,
  description: string,
  place: string
}
export interface FullEvent {
  name: string,
  date: string,
  start_time: string,
  stop_time: string,
  info: string,
  adress: string, 
  comments: [Object],
  price: string,
  organiser: string,
  phone: string,
  email: string
}