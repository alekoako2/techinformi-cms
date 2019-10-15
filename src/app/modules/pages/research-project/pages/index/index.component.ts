import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ResearchProjectQuery_researchProject, ResearchProjectsQuery_researchProjects} from '../../../../../types/operation-result-types';
import {ResearchProjectUpdateCreateDialogComponent} from '../../components/research-project-update-create-dialog/research-project-update-create-dialog.component';
import {ResearchProjectDeleteDialogComponent} from '../../components/research-project-delete-dialog/research-project-delete-dialog.component';
import {CountResearchProjects, GetResearchProject, LoadResearchProjects} from '../../state/research-project.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @Select(state => state.researchProject.researchProjects) researchProjects$: Observable<ResearchProjectsQuery_researchProjects[]>;
  @Select(state => state.researchProject.count) countResearchProjects$: Observable<number>;
  @Select(state => state.researchProject.researchProject) researchProject$: Observable<ResearchProjectQuery_researchProject>;

  ResearchProjectUpdateCreateDialogComponent = ResearchProjectUpdateCreateDialogComponent;
  ResearchProjectDeleteDialogComponent = ResearchProjectDeleteDialogComponent;

  CountResearchProjects = CountResearchProjects;
  GetResearchProject = GetResearchProject;
  LoadResearchProjects = LoadResearchProjects;

  constructor() {
  }

  ngOnInit() {
  }

}
