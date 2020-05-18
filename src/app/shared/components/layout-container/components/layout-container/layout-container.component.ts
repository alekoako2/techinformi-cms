import { Component, Input } from '@angular/core'

@Component({
  selector: 'layout-container',
  host: {
    '[style.display]': "'block'",
  },
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
})
export class LayoutContainerComponent {
  @Input() backgroundColor?
  @Input() flexWidth = 60
  @Input() layoutStyle = 'column'
  @Input() layoutGap = '0px'
  @Input() ltLg = 100
}
