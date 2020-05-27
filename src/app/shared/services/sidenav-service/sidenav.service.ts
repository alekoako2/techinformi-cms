import { Injectable } from '@angular/core'
import { Observable, ReplaySubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private _sidenav: ReplaySubject<boolean> = new ReplaySubject<boolean>()

  get sidenav(): Observable<boolean> {
    return this._sidenav.asObservable()
  }

  toggle(): void {
    this._sidenav.next(true)
  }
}
