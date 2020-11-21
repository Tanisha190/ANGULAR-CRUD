import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StringDecoder } from 'string_decoder';

@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.css']
})
export class NewTeacherComponent implements OnInit {
  teacher:{};
name:string;
dob:string;
ser:boolean;
serv:boolean;
servc:boolean;
SpecialEducation:string;
Remedial:string;
SpeechTherapy:string;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  Submit() {
    if(this.ser==true)
    {
         this.SpecialEducation="YES";
    }
    if(this.serv==true)
    {
         this.Remedial="YES";
    }
    if(this.servc==true)
    {
         this.SpeechTherapy="YES";
    }
    
   this.teacher={
     "name":this.name,
     "dob":this.dob,
     "SpecialEducation":this.SpecialEducation,
     "Remedial":this.Remedial,
     "SpeechTherapy":this.SpeechTherapy
     
     
   }
    this.http.post('http://localhost:3000/',this.teacher)
      .subscribe(res => {
        }, (err) => {
          console.log(err);
        });
        console.log(this.name);
        console.log(this.dob);
        console.log(this.teacher);
        this.router.navigate(['/list-teacher']);

  }
}
