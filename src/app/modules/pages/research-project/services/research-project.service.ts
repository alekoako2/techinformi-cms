import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {
  CountResearchProjectsQuery,
  CreateResearchProjectMutation,
  CreateResearchProjectMutation_createResearchProject, DeleteResearchProjectMutation,
  ResearchProjectQuery,
  ResearchProjectsQuery, UpdateResearchProjectMutation, UpdateResearchProjectMutation_updateResearchProject
} from '../../../../types/operation-result-types';

import {map} from 'rxjs/operators';
import {countResearchProjectsQuery, researchProjectQuery, researchProjectsQuery} from './research-project-query';
import {createResearchProjectMutation, deleteResearchProjectMutation, updateResearchProjectMutation} from './research-project-mutations';


@Injectable({
  providedIn: 'root'
})
export class ResearchProjectService {
  constructor(private apollo: Apollo, @Inject(LOCALE_ID) public localeId: string) {
  }

  researchProjectsCount() {
    return this.apollo
      .watchQuery<CountResearchProjectsQuery>({
        query: countResearchProjectsQuery
      }).valueChanges
      .pipe(
        map(count => count.data)
      );
  }

  loadResearchProjects(query = {title: '', researchExecutors: '', keyword: '', organizationName: '', oecd: ''}, index = 0, limit = 10) {
    return this.apollo
      .watchQuery<ResearchProjectsQuery>({
        variables: {
          languageCode: this.localeId.toUpperCase(),
          first: limit,
          skip: index * limit,
          query: {...query}
        },
        query: researchProjectsQuery
      }).valueChanges.pipe(map(researchProjectsData => researchProjectsData.data));
  }

  getResearchProject(id) {
    return this.apollo
      .watchQuery<ResearchProjectQuery>({
        variables: {
          id
        },
        query: researchProjectQuery
      })
      .valueChanges
      .pipe(
        map(researchProjectData => researchProjectData.data)
      );
  }

  createResearchProject(input: CreateResearchProjectMutation_createResearchProject) {
    return this.apollo
      .mutate<CreateResearchProjectMutation>({
        variables: {
          inpDate: input.inpDate,
          regDate: input.regDate,
          startDate: input.startDate,
          endDate: input.endDate,
          regNumb: input.regNumb,
          research: input.research,
          researchDirection: input.researchDirection,
          researchExecutionBasis: input.researchExecutionBasis,
          abstract: input.abstract,
          annotation: input.annotation,
          budget: Number(input.budget),
          organizationName: input.organizationName,
          organizationShortName: input.organizationShortName,
          organizationCode: input.organizationCode,
          organizationHead: input.organizationHead,
          organizationCity: input.organizationCity,
          organizationAddress: input.organizationAddress,
          organizationIndex: input.organizationIndex,
          organizationTel: input.organizationTel,
          organizationWeb: input.organizationWeb,
          participatingInstitutionName: input.participatingInstitutionName,
          participatingInstitutionCountryCity: input.participatingInstitutionCountryCity,
          participatingInstitutionTel: input.participatingInstitutionTel,
          participatingInstitutionEmail: input.participatingInstitutionEmail,
          participatingInstitutionWeb: input.participatingInstitutionWeb,
          leaderName: input.leaderName,
          leaderPosition: input.leaderPosition,
          leaderAcademicDegree: input.leaderAcademicDegree,
          leaderTel: input.leaderTel,
          leaderMobile: input.leaderMobile,
          leaderEmail: input.leaderEmail,
          researchExecutors: input.researchExecutors,
          financing: input.financing,
          note: input.note,
          pincode: input.pincode,
          translation: [
            {
              title: input.translation[0].title,
              key: input.translation[0].key,
              language: 'KA'
            },
            {
              title: input.translation[1].title,
              key: input.translation[1].key,
              language: 'EN'
            }
          ],
          oecds: [...input.oecds]
        },
        mutation: createResearchProjectMutation
      })
      .pipe(
        map(researchProjectData => researchProjectData.data)
      );
  }

  updateResearchProject(input: UpdateResearchProjectMutation_updateResearchProject) {
    return this.apollo
      .mutate<UpdateResearchProjectMutation>({
        variables: {
          id: input.id,
          inpDate: input.inpDate,
          regDate: input.regDate,
          startDate: input.startDate,
          endDate: input.endDate,
          regNumb: input.regNumb,
          research: input.research,
          researchDirection: input.researchDirection,
          researchExecutionBasis: input.researchExecutionBasis,
          abstract: input.abstract,
          annotation: input.annotation,
          budget: Number(input.budget),
          organizationName: input.organizationName,
          organizationShortName: input.organizationShortName,
          organizationCode: input.organizationCode,
          organizationHead: input.organizationHead,
          organizationCity: input.organizationCity,
          organizationAddress: input.organizationAddress,
          organizationIndex: input.organizationIndex,
          organizationTel: input.organizationTel,
          organizationWeb: input.organizationWeb,
          participatingInstitutionName: input.participatingInstitutionName,
          participatingInstitutionCountryCity: input.participatingInstitutionCountryCity,
          participatingInstitutionTel: input.participatingInstitutionTel,
          participatingInstitutionEmail: input.participatingInstitutionEmail,
          participatingInstitutionWeb: input.participatingInstitutionWeb,
          leaderName: input.leaderName,
          leaderPosition: input.leaderPosition,
          leaderAcademicDegree: input.leaderAcademicDegree,
          leaderTel: input.leaderTel,
          leaderMobile: input.leaderMobile,
          leaderEmail: input.leaderEmail,
          researchExecutors: input.researchExecutors,
          financing: input.financing,
          note: input.note,
          pincode: input.pincode,
          translation: [
            {
              title: input.translation[0].title,
              key: input.translation[0].key,
              language: 'KA'
            },
            {
              title: input.translation[1].title,
              key: input.translation[1].key,
              language: 'EN'
            }
          ],
          oecds: [...input.oecds]
        },
        mutation: updateResearchProjectMutation
      })
      .pipe(
        map(researchProjectData => researchProjectData.data)
      );
  }

  deleteResearchProject(id: string) {
    return this.apollo
      .mutate<DeleteResearchProjectMutation>({
        variables: {
          id: id
        },
        mutation: deleteResearchProjectMutation
      })
      .pipe(
        map(researchProjectIndex => researchProjectIndex.data)
      );
  }

}
