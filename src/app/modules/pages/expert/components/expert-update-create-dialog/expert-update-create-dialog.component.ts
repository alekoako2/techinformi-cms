import {Component, Inject, OnInit} from '@angular/core';
import {
  ExpertQuery_expert,
  ExpertQuery_expert_languages,
  ExpertQuery_expert_oecds,
  ExpertQuery_expert_translation, OecdsQuery, OecdsQuery_oecds
} from '../../../../../types/operation-result-types';
import {Store} from '@ngxs/store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {CreateExpert, UpdateExpert} from '../../../expert/state/expert.actions';
import {OecdService} from '../../../oecd/OecdService/oecd.service';

@Component({
  selector: 'app-expert-update-create-dialog',
  templateUrl: './expert-update-create-dialog.component.html',
  styleUrls: ['./expert-update-create-dialog.component.scss']
})
export class ExpertUpdateCreateDialogComponent implements OnInit {
  showCreate: boolean = true;
  expertData: ExpertQuery_expert;
  oecdList: OecdsQuery_oecds[];
  languageList = [
    {
      code: 'EN',
      name: 'English'
    },
    {
      code: 'FR',
      name: 'French'
    },
    {
      code: 'DE',
      name: 'German'
    },
    {
      code: 'RU',
      name: 'Russian'
    },
    {
      code: 'ES',
      name: 'Spanish'
    },
    {
      code: 'IT',
      name: 'Italian'
    }
  ];

  constructor(
    private store: Store,
    private oecdService: OecdService,
    public dialogRef: MatDialogRef<ExpertUpdateCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?
  ) {

    this.expertData = <ExpertQuery_expert> {};
    this.expertData.translation = <ExpertQuery_expert_translation[]> [];
    this.expertData.translation[0] = <ExpertQuery_expert_translation> {};
    this.expertData.translation[1] = <ExpertQuery_expert_translation> {};

    this.expertData.oecds = <ExpertQuery_expert_oecds[]> [];

    this.expertData.languages = <ExpertQuery_expert_languages[]> [];

    if (data) {
      this.showCreate = false;
      this.expertData = data.expert.expert;
    }
  }

  ngOnInit() {
    this.oecdService.loadOecds()
      .subscribe((res: OecdsQuery) => {
        this.oecdList = res.oecds;
      });
  }

  create() {
    this.store.dispatch(new CreateExpert(this.expertData));
    this.dialogRef.close();
  }

  update() {
    this.store.dispatch(new UpdateExpert(this.expertData));
    this.dialogRef.close();
  }

}
