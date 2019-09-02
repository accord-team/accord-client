import { Component, Output, EventEmitter } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  @Output() menuClick = new EventEmitter<boolean>();

  public appName = environment.appName;

  public onMenuClick() {
    this.menuClick.emit(true);
  }

}
