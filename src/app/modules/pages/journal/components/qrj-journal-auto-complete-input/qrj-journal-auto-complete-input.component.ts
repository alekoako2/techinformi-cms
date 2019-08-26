import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QrjJournalsQuery, QrjJournalsQuery_qrjJournals} from '../../../../../types/operation-result-types';
import {map, startWith} from 'rxjs/operators';
import {QrjJournalService} from '../../JournalService/qrj-journal.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-qrj-journal-auto-complete-input',
  templateUrl: './qrj-journal-auto-complete-input.component.html',
  styleUrls: ['./qrj-journal-auto-complete-input.component.scss']
})
export class QrjJournalAutoCompleteInputComponent implements OnInit {
  @Input() qrjJournalModel: string;
  @Output() qrjJournalModelChange = new EventEmitter<string>();

  journalControl = new FormControl();
  filteredJournalOptions: Observable<QrjJournalsQuery_qrjJournals[]>;

  constructor(private qrjJournalService: QrjJournalService) {
  }

  ngOnInit() {
    this.qrjJournalService.getQrjJournals()
      .subscribe((res: QrjJournalsQuery) => {

        this.filteredJournalOptions = this.journalControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value, res.qrjJournals))
          );


        if (this.qrjJournalModel) {
          this.journalControl.setValue(this.qrjJournalModel);
        }
      });
  }

  private _filter(value: string, array): any[] {

    const filterValue = value.toLowerCase();
    return array.filter(item => item.code.toLowerCase().includes(filterValue));
  }

}
