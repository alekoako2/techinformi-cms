import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core'
import {
  AbstractControlOptions,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms'
import {
  LanguageCode,
  QrjPublicationCreateInput,
  QrjPublicationTranslationInput,
  QrjPublicationUpdateInput,
} from '@graphql'

/**
 * Model what the `FormBuilder.control` method receives.
 */
export type ValidatorOrOpts =
  | ValidatorFn
  | ValidatorFn[]
  | AbstractControlOptions
/**
 * Model what the `FormBuilder.control` method receives here.
 */
export type AsyncValidator = AsyncValidatorFn | AsyncValidatorFn[]
/**
 * Model what the `FormBuilder._createControl` method receives.
 */
export type ControlConfig<V> =
  | FormControl
  | FormGroup
  | FormArray
  | [V, ValidatorOrOpts?, AsyncValidator?]
/**
 * Model what the `FormBuilder.group` method accepts as its `controlsConfig`
 * parameter.
 */
export type FormModel<T> = {
  [P in keyof T]: ControlConfig<T[P]>
}

@Component({
  selector: 'qrj-publication-form',
  templateUrl: './qrj-publication-form.component.html',
  styleUrls: ['./qrj-publication-form.component.scss'],
})
export class QrjPublicationFormComponent implements OnChanges {
  @Input() qrjPublicationForm: FormGroup

  translationFormGroupKA: FormGroup
  translationFormGroupEN: FormGroup

  ngOnChanges(): void {
    if (this.qrjPublicationForm) {
      this.translationFormGroupKA = this.qrjPublicationForm
        ?.get('translation')
        ?.get('0') as FormGroup
      this.translationFormGroupEN = this.qrjPublicationForm
        ?.get('translation')
        ?.get('1') as FormGroup
    }
  }

  numbersRange = (startFrom: number, n: number): string[] =>
    [...Array(n).keys()].map((i) => (i + startFrom).toString())
}
