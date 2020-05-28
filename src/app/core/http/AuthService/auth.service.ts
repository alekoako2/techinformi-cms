import { Inject, Injectable, LOCALE_ID } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { signInMutation } from './gql/auth.mutations'
import { Router } from '@angular/router'
import { ErrorsComponent } from '../../authentication/components/errors/errors.component'
import { Tokens } from '@models/tokens/tokens'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN'
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN'
  private readonly USER = 'USER'
  private loggedUser: any

  constructor(
    private apollo: Apollo,
    @Inject(LOCALE_ID) public localeId: string,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  login(email: string, password: string) {
    this.apollo
      .mutate({
        variables: {
          email,
          password,
          languageCode: this.localeId.toUpperCase(),
        },
        mutation: signInMutation,
      })
      .subscribe(
        (res) => {
          this.doLoginUser(res.data['signIn'].user, res.data['signIn'].token)
          this.apollo.getClient().resetStore()
        },
        (error: Error) => {
          this._snackBar.openFromComponent(ErrorsComponent, {
            data: error.message.replace('GraphQL error: ', ''),
            duration: 5000,
          })
        }
      )
  }

  logout() {
    this.apollo.getClient().resetStore()
    this.doLogoutUser()
    // return this.http.post<any>(`${config.apiUrl}/logout`, {
    //   'refreshToken': this.getRefreshToken()
    // }).pipe(
    //   tap(() => this.doLogoutUser()),
    //   mapTo(true),
    //   catchError(error => {
    //     alert(error.error);
    //     return of(false);
    //   }));
  }

  isLoggedIn() {
    return !!this.getJwtToken()
  }

  refreshToken() {
    // return this.http.post<any>(`${config.apiUrl}/refresh`, {
    //   'refreshToken': this.getRefreshToken()
    // }).pipe(tap((tokens: Tokens) => {
    //   this.storeJwtToken(tokens.jwt);
    // }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN)
  }

  setUser(user: any) {
    this.loggedUser = user
  }

  getUser() {
    return this.loggedUser
  }

  private doLoginUser(user: string, tokens: Tokens) {
    this.loggedUser = user
    this.storeTokens(user, tokens)
  }

  private doLogoutUser() {
    this.loggedUser = null
    this.removeTokens()
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN)
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt)
  }

  private storeTokens(user, tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens)
    localStorage.setItem(this.USER, JSON.stringify(user))
    location.reload()
    // localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens = (): void => {
    localStorage.removeItem(this.JWT_TOKEN)
    localStorage.removeItem(this.USER)
    location.reload()
  }
}
