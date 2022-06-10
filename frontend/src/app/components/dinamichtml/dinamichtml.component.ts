import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dinamichtml',
  templateUrl: './dinamichtml.component.html'
})
export class DinamichtmlComponent implements OnInit {

  html:any;

  constructor(private _route: ActivatedRoute,public sanitizer: DomSanitizer) { 
  }

  ngOnInit(): void {
    this.renderHtml();
  }

  renderHtml(){
    this._route.paramMap.subscribe(param => {
      this.html = param.get('html');
    });
  }



}
