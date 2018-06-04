import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'circle-bar',
    templateUrl: './circle-bar.component.html',
    styleUrls: [ './circle-bar.component.scss' ]
})
export class CircleBarComponent implements OnInit, OnDestroy{
    @Input() sName : string;
    @Input() pValue: number;
    constructor() {}

    ngOnInit(){
        
    }

    ngOnDestroy(){
        
    }
}