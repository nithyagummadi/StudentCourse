import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {Student} from './student';
import {StudentService} from './student.service';
 

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[]
})
export class StudentComponent implements OnInit {
   @ViewChild('st') s:ElementRef;
  students:Student[];
  i:number;
  constructor(private studentService:StudentService) { }
    onDelete(i:number){
      this.i=i;
      this.studentService.deleteStudent(i);
    }

  ngOnInit() {

    this.students=this.studentService.getStudents();
    this.studentService.StudentChanged.subscribe((students:Student[])=>{this.students=students});
  }

}
