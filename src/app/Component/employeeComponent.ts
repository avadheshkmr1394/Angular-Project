import { Component, Injectable, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from "@angular/forms";
import { EmployeeService } from '../Service/employeeService'
import { Employee as employee } from '../Model/employeeModel'
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';



@Component({
  selector: 'app-root',
  templateUrl: '../Container/employeeRegistration.html',
  styleUrls: ['../CSS/employee.css']
})

export class Employee implements OnInit {

  employeeForm: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder,
    private obj: EmployeeService
  ) {
    this.employeeForm = fb.group({
      EmployeeId: new FormControl(),
      Name: new FormControl(),
      Address: new FormControl(),
      MobileNo: new FormControl()
    })
  }

  Result: any
  onFormSubmit(employeeForm: NgForm) {
    const product = employeeForm.controls;
    console.log(employeeForm.value)
    console.log(employeeForm.controls)
    this.ngOnInit();
  }

  Title = 'Employee Registration'
  ngOnInit() {
    debugger
    this.Result = this.obj.getEmployee();
    // this.Result = [this.employeeForm.value]
  }

  editEmployee(employeeId: string) {
    debugger
  }

  updateEmployee() {

  }

  deleteEmployee(employeeId: string) {
    debugger
  }

}

