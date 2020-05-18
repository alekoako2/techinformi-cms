import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  private _progressBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  )

  get progressBar(): Observable<boolean> {
    return this._progressBar.asObservable()
  }

  show(e): void {
    this._progressBar.next(e)
  }
}
