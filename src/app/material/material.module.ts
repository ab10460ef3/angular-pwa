import {NgModule} from "@angular/core";
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdGridListModule,
  MdToolbarModule,

} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdCheckboxModule,
    MdMenuModule,
    MdToolbarModule,
    MdGridListModule,
    FlexLayoutModule
  ],
  exports: [
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdCheckboxModule,
    MdMenuModule,
    MdToolbarModule,
    MdGridListModule,
    FlexLayoutModule
  ],
  declarations: []
})
export class MaterialModule {
}