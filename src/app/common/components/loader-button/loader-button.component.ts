import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader-button',
  templateUrl: './loader-button.component.html',
  styleUrls: ['./loader-button.component.scss']
})
export class LoaderButtonComponent {

  @Input() type = 'button';

  @Input() color = 'primary';

  @Input() disabled = false;

  @Input() loading = false;

  @Input() fluid = false;

}
