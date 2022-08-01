import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { CoreModule} from 'src/core/core.module';
import { FamilySignupFormComponent } from './components/family-signup-form/family-signup-form.component';
import { ParentFormComponent } from './components/parent-form/parent-form.component';
import { ChildFormComponent } from './components/child-form/child-form.component';
import { ParentsFormComponent } from './components/parents-form/parents-form.component'

@NgModule({
    imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, CoreModule],
    declarations: [ AppComponent, FamilySignupFormComponent, ParentFormComponent, ChildFormComponent, ParentsFormComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }