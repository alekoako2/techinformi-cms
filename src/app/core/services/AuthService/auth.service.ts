import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {loginMutation} from './login.mutation';
import {Tokens} from '../../../shared/models/tokens/tokens';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private readonly USER = 'USER';
  private loggedUser: any;

  constructor(private apollo: Apollo, @Inject(LOCALE_ID) public localeId: string, private router: Router) {
  }

  login(email: string, password: string) {

    this.apollo
      .mutate({
        variables: {
          email,
          password,
          languageCode: this.localeId.toUpperCase()
        },
        mutation: loginMutation
      })
      .subscribe(res => {
        this.doLoginUser(res.data.login.user, res.data.login.token);
        this.router.navigate(['/home']);
      });
  }

  logout() {
    this.doLogoutUser();
    this.router.navigate(['/auth/login']);
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
    return !!this.getJwtToken();
  }

  refreshToken() {
    // return this.http.post<any>(`${config.apiUrl}/refresh`, {
    //   'refreshToken': this.getRefreshToken()
    // }).pipe(tap((tokens: Tokens) => {
    //   this.storeJwtToken(tokens.jwt);
    // }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  setUser(user: any) {
    this.loggedUser = user;
  }

  getUser() {
    return this.loggedUser;
  }

  private doLoginUser(user: string, tokens: Tokens) {
    this.loggedUser = user;
    this.storeTokens(user, tokens);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(user, tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens);
    console.log(JSON.stringify(user));
    localStorage.setItem(this.USER, JSON.stringify(user));
    // localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }

}
