import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {
  CountExpertsQuery,
  CreateExpertMutation,
  CreateExpertMutation_createExpert, DeleteExpertMutation,
  ExpertQuery,
  ExpertsQuery, LanguageCode, UpdateExpertMutation, UpdateExpertMutation_updateExpert
} from '../../../../types/operation-result-types';
import {countExpertsQuery, expertQuery, expertsQuery} from '../../expert/services/expert-query';
import {map} from 'rxjs/operators';
import {createExpertMutation, deleteExpertMutation, updateExpertMutation} from '../../expert/services/expert-mutations';
import {InMemoryCache} from 'apollo-cache-inmemory';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {
  constructor(private apollo: Apollo, @Inject(LOCALE_ID) public localeId: string) {
  }

  expertsCount() {
    return this.apollo
      .watchQuery<CountExpertsQuery>({
        query: countExpertsQuery
      }).valueChanges
      .pipe(
        map(count => count.data)
      );
  }

  loadExperts(searchText = '', index = 0, limit = 10) {
    return this.apollo
      .watchQuery<ExpertsQuery>({
        variables: {
          languageCode: this.localeId.toUpperCase(),
          first: limit,
          skip: index * limit,
          query: searchText
        },
        query: expertsQuery
      }).valueChanges.pipe(map(expertsData => expertsData.data));
  }

  getExpert(id) {
    return this.apollo
      .watchQuery<ExpertQuery>({
        variables: {
          id
        },
        query: expertQuery
      })
      .valueChanges
      .pipe(
        map(expertData => expertData.data)
      );
  }

  createExpert(input: CreateExpertMutation_createExpert) {
    return this.apollo
      .mutate<CreateExpertMutation>({
        variables: {
          inpDate: input.inpDate,
          email: input.email,
          web: input.web,
          tel: input.tel,
          mobile: input.mobile,
          publications: input.publications,
          translation: [
            {
              fullName: input.translation[0].fullName,
              qualification: input.translation[0].qualification,
              academicDegree: input.translation[0].academicDegree,
              specialization: input.translation[0].specialization,
              workingPlace: input.translation[0].workingPlace,
              position: input.translation[0].position,
              language: 'KA'
            },
            {
              fullName: input.translation[1].fullName,
              qualification: input.translation[1].qualification,
              academicDegree: input.translation[1].academicDegree,
              specialization: input.translation[1].specialization,
              workingPlace: input.translation[1].workingPlace,
              position: input.translation[1].position,
              language: 'EN'
            }
          ],
          languages: [...input.languages],
          oecds: [...input.oecds]
        },
        mutation: createExpertMutation
      })
      .pipe(
        map(expertData => expertData.data)
      );
  }

  updateExpert(input: UpdateExpertMutation_updateExpert) {
    return this.apollo
      .mutate<UpdateExpertMutation>({
        variables: {
          id: input.id,
          inpDate: input.inpDate,
          email: input.email,
          web: input.web,
          tel: input.tel,
          mobile: input.mobile,
          publications: input.publications,
          translation: [
            {
              fullName: input.translation[0].fullName,
              qualification: input.translation[0].qualification,
              academicDegree: input.translation[0].academicDegree,
              specialization: input.translation[0].specialization,
              workingPlace: input.translation[0].workingPlace,
              position: input.translation[0].position,
              language: 'KA'
            },
            {
              fullName: input.translation[1].fullName,
              qualification: input.translation[1].qualification,
              academicDegree: input.translation[1].academicDegree,
              specialization: input.translation[1].specialization,
              workingPlace: input.translation[1].workingPlace,
              position: input.translation[1].position,
              language: 'EN'
            }
          ],
          languages: [...input.languages],
          oecds: [...input.oecds]
        },
        mutation: updateExpertMutation
      })
      .pipe(
        map(expertData => expertData.data)
      );
  }

  deleteExpert(id: string) {
    console.log(id);
    return this.apollo
      .mutate<DeleteExpertMutation>({
        variables: {
          id: id
        },
        mutation: deleteExpertMutation
      })
      .pipe(
        map(expertIndex => expertIndex.data)
      );
  }

}
