import { Employee } from '../Model/employeeModel'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Http } from '@angular/http'


@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    private constructor(http: HttpClient) {

    }
    employeeList: Employee[]
    getEmployee() {
        this.employeeList = [{
            EmployeeId: '1',
            Name: 'Avadhesh kumar',
            Address: 'Noida',
            Email: 'xyz',
            MobileNo: 123456789
        }]
        return this.employeeList
    }
    insertEmployee = (item) => {
        if (!item.EmployeeId) {
            // update opration

        }
        else {
            // insert opration
            
        }
    }

    editEmployee = (employeeId) => {

    }

    deleteEmployee = (employeeId) => {

    }
}
