import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlContainer, FormControl, NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {OecdService} from '../../OecdService/oecd.service';
import {OecdsQuery_oecds} from '../../../../../types/operation-result-types';

@Component({
  selector: 'app-oecd-auto-complete-input',
  templateUrl: './oecd-auto-complete-input.component.html',
  styleUrls: ['./oecd-auto-complete-input.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]

})
export class OecdAutoCompleteInputComponent implements OnInit {

  @Input() oecdModel: string;
  @Output() oecdModelChange = new EventEmitter<string>();

  @Input() name: string;
  @Input() required: boolean = false;
  @Input() list;
  oecdControl = new FormControl();
  filteredOecdOptions: Observable<OecdsQuery_oecds[]>;

  constructor(private oecdService: OecdService) {

  }

  ngOnInit() {
    // this.res.oecds = <OecdsQuery_oecds[]> [];
    // this.list.subscribe((res) => {
    this.list.subscribe((res) => {
    });
    // this.filteredOecdOptions = this
    //   .oecdControl
    //   .valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => this._filter(value, this.list))
    //   );
    // });
    // console.log('aleko', this.res.oecds);
    // this.oecdService.loadOecds()
    //   .subscribe((res: OecdsQuery) => {

    // });
  }

  private _filter(value: string, array): any[] {
    if (array) {
      const filterValue = value.toLowerCase();
      return array.filter(item => item.code.toLowerCase().includes(filterValue));
    }
  }

}
