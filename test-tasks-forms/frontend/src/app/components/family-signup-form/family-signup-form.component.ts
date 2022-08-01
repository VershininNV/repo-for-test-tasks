import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
} from '@angular/forms'
import { FamilyModel, ParentModel } from 'src/shared/interfaces'

@Component({
  selector: 'app-family-signup-form',
  templateUrl: './family-signup-form.component.html',
  styleUrls: ['./family-signup-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FamilySignupFormComponent implements OnInit {
  family: FamilyModel
  familyForm: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.familyForm = this.fb.group({ families: new FormArray([]) })
    this.familyForm.valueChanges.subscribe((newValue) => console.log(newValue))
  }

  get families() {
    return this.familyForm.controls['families'] as FormArray
  }

  addFamily(): void {
    const newFamily = this.fb.array([])
    this.families.push(newFamily)
  }

  deleteFamily(familiId: number) {
    this.families.removeAt(familiId)
  }

  saveData() {
    let familyData = this.save(this.family)
  }

  save(family: FamilyModel): string {
    return JSON.stringify(family)
  }

  onFormControlInit(
    property: string,
    control: AbstractControl,
    familiId: number
  ) {
    const family = this.families.at(familiId) as FormArray
    family.push(control)
  }
}
