import { Subscription } from 'rxjs/Subscription';
import {Http, HttpModule} from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
details:any[];


  constructor(private http:Http) { }

  ngOnInit() {
    let text:string;
    this.http.get('http://localhost:3000/test')
      .subscribe(resp =>
        this.details=JSON.parse(resp.text().split('=')[1])
    )                    
  }

}
