import { Injectable } from '@angular/core';
import { Student } from "./student";
import { EventEmitter } from "@angular/core";

@Injectable()
export class StudentService {

    StudentChanged= new EventEmitter<Student[]>();

  private students:Student[]=[new Student(1,'Nithya Gummadi',['math','computers']),new Student(2,'Guna Chandrika',['Economics'])]

   getStudents()
    {
        return this.students.slice();
    }

    insertStudent(student:Student){
        this.students.push(student);
        this.StudentChanged.emit(this.students.slice());
    }

    deleteStudent(i:number){
        this.students.splice(i,1);
        this.StudentChanged.emit(this.students.slice());
    }

}
