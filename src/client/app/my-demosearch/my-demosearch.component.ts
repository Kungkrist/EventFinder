import {Component, OnInit} from 'angular2/core';

@Component({
  moduleId: __moduleName,
  selector: 'my-demosearch',
  templateUrl: 'my-demosearch.component.html',
  styleUrls: ['my-demosearch.component.css']
})
export class MyDemosearchComponent implements OnInit {
  searchInput: {input: "hej"};
  constructor() {}
  
  ngOnInit() {
  }
  
  search() {
    console.log('Inside search: ' + this.searchInput)
    var ref = new Firebase("https://sizzling-heat-4438.firebaseio.com/activities");
    
    ref.on("value", function (snapshot) {
      for (var item of snapshot.val()){
        if (item.description.includes("Läx")){
          console.log(item);
        }
      }
    });  
  }
}
