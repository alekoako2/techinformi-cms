import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {
  CountTechnologyTransferAndInnovationOrganizationsQuery,
  CreateTechnologyTransferAndInnovationOrganizationMutation,
  CreateTechnologyTransferAndInnovationOrganizationMutation_createTechnologyTransferAndInnovationOrganization,
  DeleteTechnologyTransferAndInnovationOrganizationMutation,
  TechnologyTransferAndInnovationOrganizationQuery,
  TechnologyTransferAndInnovationOrganizationsQuery,
  UpdateTechnologyTransferAndInnovationOrganizationMutation,
  UpdateTechnologyTransferAndInnovationOrganizationMutation_updateTechnologyTransferAndInnovationOrganization
} from '../../../../types/operation-result-types';

import {map} from 'rxjs/operators';

import {
  countTechnologyTransferAndInnovationOrganizationsQuery, technologyTransferAndInnovationOrganizationQuery,
  technologyTransferAndInnovationOrganizationsQuery
} from './technology-transfer-and-innovation-organization-query';
import {
  createTechnologyTransferAndInnovationOrganizationMutation,
  deleteTechnologyTransferAndInnovationOrganizationMutation, updateTechnologyTransferAndInnovationOrganizationMutation
} from './technology-transfer-and-innovation-organization-mutations';

@Injectable({
  providedIn: 'root'
})
export class TechnologyTransferAndInnovationOrganizationService {
  constructor(private apollo: Apollo, @Inject(LOCALE_ID) public localeId: string) {
  }

  technologyTransferAndInnovationOrganizationsCount() {
    return this.apollo
      .watchQuery<CountTechnologyTransferAndInnovationOrganizationsQuery>({
        query: countTechnologyTransferAndInnovationOrganizationsQuery
      }).valueChanges
      .pipe(
        map(count => count.data)
      );
  }

  loadTechnologyTransferAndInnovationOrganizations(searchText = '', index = 0, limit = 10) {

    return this.apollo
      .watchQuery<TechnologyTransferAndInnovationOrganizationsQuery>({
        variables: {
          first: limit,
          skip: index * limit,
          query: searchText
        },
        query: technologyTransferAndInnovationOrganizationsQuery
      }).valueChanges.pipe(map(technologyTransferAndInnovationOrganizationsData => technologyTransferAndInnovationOrganizationsData.data));
  }

  getTechnologyTransferAndInnovationOrganization(id) {
    return this.apollo
      .watchQuery<TechnologyTransferAndInnovationOrganizationQuery>({
        variables: {
          id
        },
        query: technologyTransferAndInnovationOrganizationQuery
      })
      .valueChanges
      .pipe(
        map(technologyTransferAndInnovationOrganizationData => technologyTransferAndInnovationOrganizationData.data)
      );
  }

  createTechnologyTransferAndInnovationOrganization(input: CreateTechnologyTransferAndInnovationOrganizationMutation_createTechnologyTransferAndInnovationOrganization) {
    return this.apollo
      .mutate<CreateTechnologyTransferAndInnovationOrganizationMutation>({
        variables: {
          url: input.url,
          title: input.title,
          text: input.text,
          region: input.region,
        },
        mutation: createTechnologyTransferAndInnovationOrganizationMutation
      })
      .pipe(
        map(technologyTransferAndInnovationOrganizationData => technologyTransferAndInnovationOrganizationData.data)
      );
  }

  updateTechnologyTransferAndInnovationOrganization(input: UpdateTechnologyTransferAndInnovationOrganizationMutation_updateTechnologyTransferAndInnovationOrganization) {
    return this.apollo
      .mutate<UpdateTechnologyTransferAndInnovationOrganizationMutation>({
        variables: {
          id: input.id,
          url: input.url,
          title: input.title,
          text: input.text,
          region: input.region
        },
        mutation: updateTechnologyTransferAndInnovationOrganizationMutation
      })
      .pipe(
        map(technologyTransferAndInnovationOrganizationData => technologyTransferAndInnovationOrganizationData.data)
      );
  }

  deleteTechnologyTransferAndInnovationOrganization(id: string) {
    return this.apollo
      .mutate<DeleteTechnologyTransferAndInnovationOrganizationMutation>({
        variables: {
          id: id
        },
        mutation: deleteTechnologyTransferAndInnovationOrganizationMutation
      })
      .pipe(
        map(technologyTransferAndInnovationOrganizationIndex => technologyTransferAndInnovationOrganizationIndex.data)
      );
  }

}
