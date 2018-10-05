import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TodoComponent } from './components/todo/todo.component';
import { CountTaskPipe } from './pipes/count-task.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoComponent,
    CountTaskPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
