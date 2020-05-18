import { Component, Input } from '@angular/core'

@Component({
  selector: 'page-title-bar',
  templateUrl: './page-title-bar.component.html',
  styleUrls: ['./page-title-bar.component.scss'],
})
export class PageTitleBarComponent {
  @Input() title: string
  @Input() description?: string
}
