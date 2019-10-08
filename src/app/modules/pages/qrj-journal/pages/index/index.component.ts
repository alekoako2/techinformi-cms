import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {
  QrjJournalQuery_qrjJournal,
  QrjJournalsQuery_qrjJournals
} from '../../../../../types/operation-result-types';
import {QrjJournalUpdateCreateDialogComponent} from '../../components/qrj-journal-update-create-dialog/qrj-journal-update-create-dialog.component';
import {QrjJournalDeleteDialogComponent} from '../../components/qrj-journal-delete-dialog/qrj-journal-delete-dialog.component';
import {CountQrjJournals, GetQrjJournal, LoadQrjJournals} from '../../state/qrj-journal.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @Select(state => state.qrjJournal.qrjJournals) qrjJournals$: Observable<QrjJournalsQuery_qrjJournals[]>;
  @Select(state => state.qrjJournal.count) countQrjJournals$: Observable<number>;
  @Select(state => state.qrjJournal.qrjJournal) qrjJournal$: Observable<QrjJournalQuery_qrjJournal>;

  QrjJournalUpdateCreateDialogComponent = QrjJournalUpdateCreateDialogComponent;
  QrjJournalDeleteDialogComponent = QrjJournalDeleteDialogComponent;

  CountQrjJournals = CountQrjJournals;
  GetQrjJournal = GetQrjJournal;
  LoadQrjJournals = LoadQrjJournals;

  constructor() {
  }

  ngOnInit() {
  }

}
