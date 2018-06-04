import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'profile-intro',
    templateUrl: './profile-intro.component.html',
    styleUrls: [ './profile-intro.component.scss' ]
})
export class UserIntroComponent implements OnInit, OnDestroy{
    constructor() {}

    ngOnInit(){
        
    }

    ngOnDestroy(){
        
    }
}