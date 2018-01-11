export class Student {

    id:number=0;
    name:string='';
    course:string[];
    

    constructor(id:number,name:string,course:string[]){

        this.name=name;
        this.course=course;
        this.id=id;
    }
}
