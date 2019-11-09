import {Component, Inject, OnInit} from '@angular/core';
import {
  ResearchProjectQuery_researchProject,
  ResearchProjectQuery_researchProject_oecds,
  ResearchProjectQuery_researchProject_translation, OecdsQuery,
  OecdsQuery_oecds, ResearchProjectQuery_researchProject_translation_key
} from '../../../../../types/operation-result-types';
import {Store} from '@ngxs/store';
import {OecdService} from '../../../oecd/OecdService/oecd.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CreateResearchProject, UpdateResearchProject} from '../../state/research-project.actions';

@Component({
  selector: 'app-research-project-update-create-dialog',
  templateUrl: './research-project-update-create-dialog.component.html',
  styleUrls: ['./research-project-update-create-dialog.component.scss']
})
export class ResearchProjectUpdateCreateDialogComponent implements OnInit {
  showCreate: boolean = true;
  researchProjectData: ResearchProjectQuery_researchProject;
  oecdList: OecdsQuery_oecds[];

  constructor(
    private store: Store,
    private oecdService: OecdService,
    public dialogRef: MatDialogRef<ResearchProjectUpdateCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?
  ) {

    this.researchProjectData = <ResearchProjectQuery_researchProject> {};
    this.researchProjectData.translation = <ResearchProjectQuery_researchProject_translation[]> {};
    this.researchProjectData.translation[0] = <ResearchProjectQuery_researchProject_translation> {};
    this.researchProjectData.translation[1] = <ResearchProjectQuery_researchProject_translation> {};
    this.researchProjectData.translation[0].key = <ResearchProjectQuery_researchProject_translation_key[]> [];
    this.researchProjectData.translation[1].key = <ResearchProjectQuery_researchProject_translation_key[]> [];

    this.researchProjectData.oecds = <ResearchProjectQuery_researchProject_oecds[]> [];

    if (data) {
      this.showCreate = false;
      this.researchProjectData = data.researchProject.researchProject;
      if (this.researchProjectData.translation.length === 0) {
        this.researchProjectData.translation = <ResearchProjectQuery_researchProject_translation[]> {};
        this.researchProjectData.translation[0] = <ResearchProjectQuery_researchProject_translation> {};
        this.researchProjectData.translation[1] = <ResearchProjectQuery_researchProject_translation> {};
        this.researchProjectData.translation[0].key = <ResearchProjectQuery_researchProject_translation_key[]> [];
        this.researchProjectData.translation[1].key = <ResearchProjectQuery_researchProject_translation_key[]> [];
      }
    }
  }

  ngOnInit() {
    this.oecdService.loadOecds()
      .subscribe((res: OecdsQuery) => {
        this.oecdList = res.oecds;
      });
  }

  create() {
    this.store.dispatch(new CreateResearchProject(this.researchProjectData));
    this.dialogRef.close();
  }

  update() {
    this.store.dispatch(new UpdateResearchProject(this.researchProjectData));
    this.dialogRef.close();
  }

}
