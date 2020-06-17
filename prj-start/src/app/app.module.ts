import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RecepiesComponent } from './recepies/recepies.component';

@NgModule({
  declarations: [AppComponent, HeaderComponentComponent, RecepiesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
