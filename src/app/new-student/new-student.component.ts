import { Component, OnInit,ElementRef, ViewChild  } from '@angular/core';
import {StudentService} from '../student/student.service';
import { Student } from "app/student/student";

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css'],
  providers:[]
})
export class NewStudentComponent implements OnInit {
   @ViewChild('name') name:ElementRef;
  @ViewChild('course') course:ElementRef;
  @ViewChild('id') id:ElementRef;

constructor(private studentService:StudentService) { }

onAdd(){
  const s=new Student(this.id.nativeElement.value,this.name.nativeElement.value,this.course.nativeElement.value);
  this.studentService.insertStudent(s);
}

  ngOnInit() {
  }

}
