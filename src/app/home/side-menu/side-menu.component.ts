import { Component, ViewChild, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SideMenu } from 'types/side-menu/side-menu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  @ViewChild(MatSidenav, { static: false })
  sidenav: MatSidenav;

  @Input() items: SideMenu.Item[];

  public onItemClick(item: SideMenu.Item) {
    this.sidenav.toggle();
    item.onClick();
  }

}
