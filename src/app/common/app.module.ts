import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './sidebar/sidebar.component';

import 'bootstrap';

// bold-reports
import '@boldreports/javascript-reporting-controls/Scripts/v2.0/common/bold.reports.common.min';
import '@boldreports/javascript-reporting-controls/Scripts/v2.0/common/bold.reports.widgets.min';
import '@boldreports/javascript-reporting-controls/Scripts/v2.0/bold.report-viewer.min';
import '@boldreports/javascript-reporting-controls/Scripts/v2.0/bold.report-designer.min';

// code-mirror
import 'codemirror/lib/codemirror';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/sql-hint';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/vb/vb';

import * as CodeMirror from 'codemirror';
const codemirror = 'CodeMirror';
window[codemirror] = CodeMirror;

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
