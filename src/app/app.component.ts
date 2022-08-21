import { Component, OnInit } from '@angular/core';

// public class StudentModel {
//    private String firstName;
//    private String lastName;
//    private LocalDate birthDate;
//    private Double income;
//    private MaritalStatus maritalStatus;
//    private Boolean ageOver26;
//    private Integer age;
// }
// DTO => Data Transfer Object
export type StudentModel = {
  firstName: string;
  lastName: string;
  birthDate: string;
  income: number;
  maritalStatus: string;
  ageOver26: boolean;
  age: number;
}

const DEFAULT_STUDENT_FORM = {
  firstName: '',
  lastName: '',
  birthDate: '2020-03-25',
  income: 100,
  maritalStatus: 'FREE',
  ageOver26: true,
  age: 25
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-html-css-bootstrap';
  studentList: StudentModel[];
  studentForm: StudentModel;

  constructor(){
    this.studentForm = Object.assign({}, DEFAULT_STUDENT_FORM);

    this.studentList = [];
    console.log('Loaded AppComponent')
  }

  submitClicked() {
    console.log('Someone clicked the button!')

    this.studentList.push(this.studentForm)
    this.clear()
    console.log(this.studentList)
  }

  clear() {
    this.studentForm = Object.assign({}, DEFAULT_STUDENT_FORM);
  }

  removeStudent(student : StudentModel) {
    const studentIndex = this.studentList.indexOf(student)
    this.studentList.splice(studentIndex, 1)
  }

}
