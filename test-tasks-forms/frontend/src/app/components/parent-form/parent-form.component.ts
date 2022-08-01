import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'
import { ParentModel } from 'src/shared/interfaces'

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentFormComponent implements OnInit {
  @Input() form: FormGroup

  @Input() formId: number

  @Output() deleteRequest = new EventEmitter<number>()

  @Output() onFormInit = new EventEmitter<AbstractControl>()

  parentForm: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initFormGroup()
    this.onFormInit.emit(this.parentForm)
  }

  get families() {
    return this.form.controls['families'] as FormArray
  }

  initFormGroup(): void {
    this.parentForm = this.fb.group({
      firstName: new FormControl(null, Validators.required),
      secondName: new FormControl(null, Validators.required),
      middleName: new FormControl(null, Validators.required),
      sex: new FormControl(null),
      age: new FormControl(null),
    })
  }

  isFormValid(): boolean {
    return this.parentForm.valid ? true : false
  }

  getFullName(): string {
    return (
      this.parentForm.get('firstName').value +
      ' ' +
      this.parentForm.get('secondName').value +
      ' ' +
      this.parentForm.get('middleName').value
    )
  }

  deleteFamily(): void {
    this.deleteRequest.emit(this.formId)
  }

  addParent(): void {}
}
