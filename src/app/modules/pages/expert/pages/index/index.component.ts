import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ExpertQuery_expert, ExpertsQuery_experts} from '../../../../../types/operation-result-types';
import {ExpertUpdateCreateDialogComponent} from '../../components/expert-update-create-dialog/expert-update-create-dialog.component';
import {ExpertDeleteDialogComponent} from '../../components/expert-delete-dialog/expert-delete-dialog.component';
import {CountExperts, GetExpert, LoadExperts} from '../../state/expert.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @Select(state => state.expert.experts) experts$: Observable<ExpertsQuery_experts[]>;
  @Select(state => state.expert.count) countExperts$: Observable<number>;
  @Select(state => state.expert.expert) expert$: Observable<ExpertQuery_expert>;

  ExpertUpdateCreateDialogComponent = ExpertUpdateCreateDialogComponent;
  ExpertDeleteDialogComponent = ExpertDeleteDialogComponent;

  CountExperts = CountExperts;
  GetExpert = GetExpert;
  LoadExperts = LoadExperts;

  constructor() {
  }

  ngOnInit() {
  }

}
