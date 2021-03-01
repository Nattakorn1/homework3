import { templateJitUrl } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component ({
    selector: 'search',
    templateUrl: './search.html',
    styleUrls: ['./search.css']
})
export class Search {
    @Input()
    name: string;
    constructor(){}
    
}