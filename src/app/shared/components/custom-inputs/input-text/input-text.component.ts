import { Component, Input, OnInit } from '@angular/core'
import { AbstractControl, FormControl } from '@angular/forms'

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  @Input() inputAbstractControl: AbstractControl

  @Input() placeholder: string
  @Input() required = false
  @Input() type = 'text'

  formControl: FormControl

  ngOnInit(): void {
    this.formControl = this.inputAbstractControl as FormControl
  }
}
