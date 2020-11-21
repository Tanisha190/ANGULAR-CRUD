import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {
  final: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  
    let resp=this.http.get('http://localhost:3000/');
    resp.subscribe(res => {
      this.final=res;
      
    }, (err) => {
      console.log(err);
    });
    
  }

}
