import {Component, Input, OnInit} from '@angular/core';
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
  @Input() qrjJournal: QrjJournalsQuery_qrjJournals;

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


        if (this.qrjJournal) {
          this.journalControl.setValue(this.qrjJournal.code);
        }
      });
  }

  private _filter(value: string, array): any[] {

    const filterValue = value.toLowerCase();
    return array.filter(item => item.code.toLowerCase().includes(filterValue));
  }

}
