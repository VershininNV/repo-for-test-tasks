import { NgModule } from '@angular/core'
import { MatSliderModule } from '@angular/material/slider'
import { MatButtonModule } from '@angular/material/button'
import { MatExpansionModule } from '@angular/material/expansion'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select'
import {MatInputModule} from '@angular/material/input'

@NgModule({
  imports: [MatSliderModule, MatButtonModule, MatExpansionModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  exports: [MatSliderModule, MatButtonModule, MatExpansionModule, MatFormFieldModule, MatSelectModule, MatInputModule],
})
export class MaterialModule {}
