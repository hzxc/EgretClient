import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { MatSidenav } from '@angular/material';
// import { TranslateService } from 'ng2-translate/ng2-translate';
import { ThemeService } from '../../../../services/theme/theme.service';
// import * as Ps from 'perfect-scrollbar';
import * as domHelper from '../../../../helpers/dom.helper';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  private isMobile;
  screenSizeWatcher: Subscription;
  isSidenavOpen: Boolean = false;
  url;
  @ViewChild(MatSidenav) private sideNave: MatSidenav;

  constructor(
    private router: Router,
    // public translate: TranslateService,
    public themeService: ThemeService
  ) {

  }
  ngOnInit() {
    // Initialize Perfect scrollbar for sidenav
    let navigationHold = document.getElementById('scroll-area');
 
    console.log(this.themeService.activatedThemeName);
  }
  isNavOver() {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }
}