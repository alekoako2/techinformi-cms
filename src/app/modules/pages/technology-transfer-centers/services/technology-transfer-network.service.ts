import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import {
  countTechnologyTransferNetworksQuery, technologyTransferNetworkQuery, technologyTransferNetworksQuery,
} from './technology-transfer-network-query';
import {
  CountTechnologyTransferNetworksQuery,
  CreateTechnologyTransferNetworkMutation,
  CreateTechnologyTransferNetworkMutation_createTechnologyTransferNetwork, DeleteTechnologyTransferNetworkMutation,
  TechnologyTransferNetworkQuery, TechnologyTransferNetworksQuery,
  UpdateTechnologyTransferNetworkMutation,
  UpdateTechnologyTransferNetworkMutation_updateTechnologyTransferNetwork
} from '../../../../types/operation-result-types';
import {
  createTechnologyTransferNetworkMutation,
  deleteTechnologyTransferNetworkMutation,
  updateTechnologyTransferNetworkMutation
} from './technology-transfer-network-mutations';

@Injectable({
  providedIn: 'root'
})
export class TechnologyTransferNetworkService {
  constructor(private apollo: Apollo, @Inject(LOCALE_ID) public localeId: string) {
  }

  technologyTransferNetworksCount() {
    return this.apollo
      .watchQuery<CountTechnologyTransferNetworksQuery>({
        query: countTechnologyTransferNetworksQuery
      }).valueChanges
      .pipe(
        map(count => count.data)
      );
  }

  loadTechnologyTransferNetworks(searchText = '', index = 0, limit = 10) {

    return this.apollo
      .watchQuery<TechnologyTransferNetworksQuery>({
        variables: {
          first: limit,
          skip: index * limit,
          query: searchText
        },
        query: technologyTransferNetworksQuery
      }).valueChanges.pipe(map(technologyTransferNetworksData => technologyTransferNetworksData.data));
  }

  getTechnologyTransferNetwork(id) {
    return this.apollo
      .watchQuery<TechnologyTransferNetworkQuery>({
        variables: {
          id
        },
        query: technologyTransferNetworkQuery
      })
      .valueChanges
      .pipe(
        map(technologyTransferNetworkData => technologyTransferNetworkData.data)
      );
  }

  createTechnologyTransferNetwork(input: CreateTechnologyTransferNetworkMutation_createTechnologyTransferNetwork) {
    return this.apollo
      .mutate<CreateTechnologyTransferNetworkMutation>({
        variables: {
          url: input.url,
          title: input.title,
          text: input.text,
          region: input.region,
        },
        mutation: createTechnologyTransferNetworkMutation
      })
      .pipe(
        map(technologyTransferNetworkData => technologyTransferNetworkData.data)
      );
  }

  updateTechnologyTransferNetwork(input: UpdateTechnologyTransferNetworkMutation_updateTechnologyTransferNetwork) {
    return this.apollo
      .mutate<UpdateTechnologyTransferNetworkMutation>({
        variables: {
          id: input.id,
          url: input.url,
          title: input.title,
          text: input.text,
          region: input.region
        },
        mutation: updateTechnologyTransferNetworkMutation
      })
      .pipe(
        map(technologyTransferNetworkData => technologyTransferNetworkData.data)
      );
  }

  deleteTechnologyTransferNetwork(id: string) {
    return this.apollo
      .mutate<DeleteTechnologyTransferNetworkMutation>({
        variables: {
          id: id
        },
        mutation: deleteTechnologyTransferNetworkMutation
      })
      .pipe(
        map(technologyTransferNetworkIndex => technologyTransferNetworkIndex.data)
      );
  }

}
