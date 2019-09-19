import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { JeopardyScoreboardComponent } from './jeopardy-scoreboard/jeopardy-scoreboard.component';
import { OhhellComponent } from './ohhell/ohhell.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    JeopardyScoreboardComponent,
    OhhellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
