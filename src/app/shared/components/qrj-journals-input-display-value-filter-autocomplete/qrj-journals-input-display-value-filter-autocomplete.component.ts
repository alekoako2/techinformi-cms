import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { QrjJournal } from '@graphql'
import { first } from 'rxjs/operators'
import { InputFilterAutocompleteListItem } from '@shared/components/custom-inputs/input-display-value-filter-autocomplete/input-display-value-filter-autocomplete.component'
import { AbstractControl, FormGroup } from '@angular/forms'
import { QrjJournalService } from '@http/qrj-journal-service'

@Component({
  selector: 'qrj-journals-input-display-value-filter-autocomplete',
  templateUrl:
    './qrj-journals-input-display-value-filter-autocomplete.component.html',
  styleUrls: [
    './qrj-journals-input-display-value-filter-autocomplete.component.scss',
  ],
})
export class QrjJournalsInputDisplayValueFilterAutocompleteComponent {
  @Input() inputAbstractControl: AbstractControl

  qrjJournalsSelectList: InputFilterAutocompleteListItem[] = []

  constructor(private qrjJournalService: QrjJournalService) {
    this.loadQrjJournalsSelectList()
  }

  loadQrjJournalsSelectList(): void {
    this.qrjJournalService
      .loadQrjJournals()
      .pipe(first())
      .subscribe((qrjJournals: QrjJournal[]) => {
        this.qrjJournalsSelectList = qrjJournals.map(
          (qrjJournal: QrjJournal) => ({
            value: qrjJournal.code,
            content: qrjJournal.translation[0].name,
          })
        )
      })
  }
}
