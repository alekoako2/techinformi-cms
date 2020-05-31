import {
  AbstractControlOptions,
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms'

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
