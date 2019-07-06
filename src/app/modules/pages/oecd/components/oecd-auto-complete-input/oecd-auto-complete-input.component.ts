import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {OecdService} from '../../OecdService/oecd.service';
import {OecdsQuery, OecdsQuery_oecds} from '../../../../../types/operation-result-types';

@Component({
  selector: 'app-oecd-auto-complete-input',
  templateUrl: './oecd-auto-complete-input.component.html',
  styleUrls: ['./oecd-auto-complete-input.component.scss']
})
export class OecdAutoCompleteInputComponent implements OnInit {

  @Input() oecd: OecdsQuery_oecds;

  oecdControl = new FormControl();
  filteredOecdOptions: Observable<OecdsQuery_oecds[]>;

  constructor(private oecdService: OecdService) {
  }

  ngOnInit() {
    this.oecdService.getOecds()
      .subscribe((res: OecdsQuery) => {

        this.filteredOecdOptions = this.oecdControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value, res.oecds))
          );

        if (this.oecd) {
          this.oecdControl.setValue(this.oecd.code);
        }

      });
  }

  private _filter(value: string, array): any[] {

    const filterValue = value.toLowerCase();
    return array.filter(item => item.code.toLowerCase().includes(filterValue));
  }
}
