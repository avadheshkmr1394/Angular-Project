import { Injectable, Component, OnInit, Input } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import {
    NavigationCancel,
    Event,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router
} from '@angular/router';

import { Token } from '../Security/Token'
import { loginModel } from '../Model/loginModel'
import { from } from 'rxjs'
import { isNullOrUndefined } from 'util'
import { SlimLoadingBarService, SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@Component({
    selector: 'app-root',
    templateUrl: '../Container/login.html',
    styleUrls: ['../CSS/login.css']
})

export class Login implements OnInit {
    loginForm: FormGroup

    constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router, private tokenObj: Token) {
        this.loginForm = formBuilder.group({
            userName: new FormControl(),
            password: new FormControl()
        })
    }

    loginHandle = (loginForm: NgForm) => {
        this.tokenObj.GetToken(loginForm.value.userName, loginForm.value.password, "password").subscribe(res => {
           debugger
            console.log(res)
        })
    }

    ngOnInit() {

    }
}



















































