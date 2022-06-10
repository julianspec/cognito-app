import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html'
})

export class IframeComponent implements OnInit  {

  url:any;
  urlSafe:any;
  prevUrl:any;
  actualizar:boolean = true;

  constructor(private _route: ActivatedRoute,private _sanitizer: DomSanitizer, private chd:ChangeDetectorRef) { }

  ngOnInit() {
    this.getUrl();
  }

  getUrl(){

    this.url = "";
    this.urlSafe = "";
    this._route.paramMap.subscribe(param => {
        this.url = param.get('url');
        this.urlSafe = this._sanitizer.bypassSecurityTrustResourceUrl('http://localhost:2250/cognitowebUIWeb/' + this.url);
        this.chd.detectChanges();
    });
 
  }

}