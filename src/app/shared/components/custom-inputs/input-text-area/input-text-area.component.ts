import { Component, Input, OnInit } from '@angular/core'
import { AbstractControl, FormControl } from '@angular/forms'

@Component({
  selector: 'input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.scss'],
})
export class InputTextAreaComponent implements OnInit {
  @Input() inputAbstractControl: AbstractControl

  @Input() placeholder: string
  @Input() required = false

  formControl: FormControl

  ngOnInit(): void {
    this.formControl = this.inputAbstractControl as FormControl
  }
}
