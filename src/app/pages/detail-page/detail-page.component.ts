import { Component } from '@angular/core';
import { ButtonModule, ContainedListModule, DropdownModule, InputModule, TabsModule } from 'carbon-components-angular';

@Component({
  selector: 'app-detail-page',
  imports: [DropdownModule, ContainedListModule, TabsModule, InputModule, ButtonModule],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss'
})
export class DetailPageComponent {
  items = [];
  keyType = [{content: 'string', selected: true}, {content: 'number',selected: false}, {content: 'boolean', selected: false}]

  onAddButtonClick(e: any) {

  }
}
