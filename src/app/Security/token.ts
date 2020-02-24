
import { appConfig } from './appConfig'
import { Http, Headers } from '@angular/http'
import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { async } from '@angular/core/testing';

import { Observable, throwError, Subscriber, observable } from 'rxjs';
import { catchError, map, subscribeOn } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class Token {



    constructor(private http: HttpClient) { 
        
    }
    GetToken(userName: string, password: string, grantType: string):Observable<any> {
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
        var body = "username=" + userName + "&password=" + password + "&grant_type=" + grantType;
        debugger
        const url = appConfig.enV('url') + "/Token"
        return this.http.post(url, body, { headers: reqHeader })
    }

    RefreshToken() {

    }
}





