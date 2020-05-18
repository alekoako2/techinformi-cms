import { Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private apollo: Apollo) {}

  // loadEmployees(){
  //   return this.apollo
  //     .watchQuery<EmployeesQuery>({
  //       variables: {
  //         languageCode: this.localeId.toUpperCase(),
  //         first: limit,
  //         skip: qrj-publications * limit,
  //         query: {...query}
  //       },
  //       query: employeesQuery
  //     }).valueChanges.pipe(contact-map(qrjsData => qrjsData.data));
  // }
}
