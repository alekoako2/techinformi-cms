import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {OecdQuery_oecd, OecdsQuery_oecds} from '../../../../../types/operation-result-types';
import {OecdUpdateCreateDialogComponent} from '../../components/oecd-update-create-dialog/oecd-update-create-dialog.component';
import {OecdDeleteDialogComponent} from '../../components/oecd-delete-dialog/oecd-delete-dialog.component';
import {CountOecds, GetOecd, LoadOecds, UpdateOecd} from '../../state/oecd.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @Select(state => state.oecd.oecds) oecds$: Observable<OecdsQuery_oecds[]>;
  @Select(state => state.oecd.count) countOecds$: Observable<number>;
  @Select(state => state.oecd.oecd) oecd$: Observable<OecdQuery_oecd>;

  OecdUpdateCreateDialogComponent = OecdUpdateCreateDialogComponent;
  OecdDeleteDialogComponent = OecdDeleteDialogComponent;

  CountOecds = CountOecds;
  GetOecd = GetOecd;
  LoadOecds = LoadOecds;

  constructor() {
  }

  ngOnInit() {
  }

}
