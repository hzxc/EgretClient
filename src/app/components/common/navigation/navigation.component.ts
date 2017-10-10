import { Component, OnInit } from '@angular/core';
import { NavigationService } from "../../../services/navigation/navigation.service";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  menuItems:any[];
  dropdownItems:any[];

  constructor(private navService: NavigationService) {}
  ngOnInit() {
    // Loads menu items from NavigationService
    this.navService.menuItems$.subscribe(menuItem => {
      this.menuItems = menuItem;
      this.dropdownItems = this.menuItems.filter(item=>item.type === 'dropDown');
    });
  }
}