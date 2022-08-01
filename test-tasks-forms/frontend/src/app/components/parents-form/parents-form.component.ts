import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-parents-form',
  templateUrl: './parents-form.component.html',
  styleUrls: ['./parents-form.component.scss'],
})
export class ParentsFormComponent implements OnInit {
  @Input() form: FormGroup

  @Input() formId: number

  @Output() deleteRequest = new EventEmitter<number>()

  @Output() onFormInit = new EventEmitter<AbstractControl>()

  parentForm: FormGroup
  parentsForm: FormArray

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initFormGroup1()
    /* this.onFormInit.emit(this.parentForm) */
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

  initFormGroup1(): void {
    this.parentsForm = this.fb.array([])
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
