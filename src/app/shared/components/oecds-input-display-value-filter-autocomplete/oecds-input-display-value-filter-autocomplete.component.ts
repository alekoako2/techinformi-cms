import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { Oecd } from '@graphql'
import { first } from 'rxjs/operators'
import { OecdService } from '@http/oecd-service'
import { InputFilterAutocompleteListItem } from '@shared/components/custom-inputs/input-display-value-filter-autocomplete/input-display-value-filter-autocomplete.component'
import { AbstractControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'oecds-input-display-value-filter-autocomplete',
  templateUrl: './oecds-input-display-value-filter-autocomplete.component.html',
  styleUrls: ['./oecds-input-display-value-filter-autocomplete.component.scss'],
})
export class OecdsInputDisplayValueFilterAutocompleteComponent {
  @Input() inputAbstractControl: AbstractControl

  oecdsSelectList: InputFilterAutocompleteListItem[] = []

  constructor(private oecdService: OecdService) {
    this.loadOecdsSelectList()
  }

  loadOecdsSelectList(): void {
    this.oecdService
      .loadOecds()
      .pipe(first())
      .subscribe((oecds: Oecd[]) => {
        this.oecdsSelectList = oecds.map((oecd: Oecd) => ({
          value: oecd.code,
          content: oecd.translation[0].name,
        }))
      })
  }
}
