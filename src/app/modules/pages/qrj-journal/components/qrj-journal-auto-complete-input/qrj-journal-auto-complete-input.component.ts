import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QrjJournalsQuery, QrjJournalsQuery_qrjJournals} from '../../../../../types/operation-result-types';
import {map, startWith} from 'rxjs/operators';
import {QrjJournalService} from '../../JournalService/qrj-journal.service';
import {ControlContainer, FormControl, FormGroup, NgForm} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-qrj-journal-auto-complete-input',
  templateUrl: './qrj-journal-auto-complete-input.component.html',
  styleUrls: ['./qrj-journal-auto-complete-input.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]

})
export class QrjJournalAutoCompleteInputComponent implements OnInit {
  @Input() journalModel: string;
  @Output() journalModelChange = new EventEmitter<string>();

  @Input() name: string;
  @Input() required: boolean = false;


  journalControl = new FormControl();
  filteredJournalOptions: Observable<QrjJournalsQuery_qrjJournals[]>;

  constructor(private controlContainer: ControlContainer, private qrjJournalService: QrjJournalService) {
  }

  ngOnInit() {

    this.qrjJournalService.loadQrjJournals()
      .subscribe((res: QrjJournalsQuery) => {

        this.filteredJournalOptions = this.journalControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value, res.qrjJournals))
          );

      });
  }

  private _filter(value: string, array): any[] {

    const filterValue = value.toLowerCase();
    return array.filter(item => item.code.toLowerCase().includes(filterValue));
  }

}
