import { Component, EventEmitter, Input, Output } from '@angular/core'
import { OecdService } from '@services/../../../core/http/oecd-service'
import { Oecd } from '@graphql'
import { first } from 'rxjs/operators'
import { InputSelectListItem } from '@shared/components/custom-inputs/input-select-with-key/input-select-with-key.component'

@Component({
  selector: 'oecds-select-input',
  templateUrl: './oecds-select-input.component.html',
  styleUrls: ['./oecds-select-input.component.scss'],
})
export class OecdsSelectInputComponent {
  @Output() oecdChange = new EventEmitter<string>()
  @Input() oecd: string

  oecdsSelectList: InputSelectListItem[]

  constructor(private oecdService: OecdService) {}

  loadOecdsSelectList(): void {
    this.oecdService
      .loadOecds()
      .pipe(first())
      .subscribe(
        (oecds: Oecd[]) =>
          (this.oecdsSelectList = oecds.map((oecd: Oecd) => ({
            key: oecd.code,
            name: oecd.translation[0].name,
          })))
      )
  }
}
