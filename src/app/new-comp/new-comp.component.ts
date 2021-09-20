import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {

  Name : string = "Marvellous";
  Name1 : string = "Infosystem";
  constructor() 
  {
     //this.Name = "Marvellous";
  }

  ngOnInit(): void {
  }

}
