import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { ChildComponent, PassingParentToChildComponent } from './passing-parent-to-child/passing-parent-to-child.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { FetchApiDataComponent } from './fetch-api-data/fetch-api-data.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { HandleErrorNotificationComponent } from './handle-error-notification/handle-error-notification.component';
import { FiltersListItemsComponent } from './filters-list-items/filters-list-items.component';
import { ImplementRouteGauardComponent } from './implement-route-gauard/implement-route-gauard.component';
import { ImplementPaginationComponent } from './implement-pagination/implement-pagination.component';
import { ToggleVisibilityComponent } from './toggle-visibility/toggle-visibility.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { CustomInputwithValidationComponent } from './custom-inputwith-validation/custom-inputwith-validation.component';
import { TracksChangesInputFormComponent } from './tracks-changes-input-form/tracks-changes-input-form.component';
import { HighlightPipe } from './highlight.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { HoverMeDirective } from './directives/hover-me.directive';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleVisibilityDirective } from './directives/toggle-visibility.directive';
import { FileSizePipe } from './pipes/file-size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PassingParentToChildComponent,
    CustomDirectiveComponent,
    FetchApiDataComponent,
    CustomPipeComponent,
    ReactiveFormValidationComponent,
    HandleErrorNotificationComponent,
    FiltersListItemsComponent,
    ImplementRouteGauardComponent,
    ImplementPaginationComponent,
    ToggleVisibilityComponent,
    UploadFilesComponent,
    CustomInputwithValidationComponent,
    TracksChangesInputFormComponent,
    // Working components

    ChildComponent,
    HighlightPipe,
    HighlightDirective,
    HoverMeDirective,
    CustomDatePipe,
    ToggleVisibilityDirective,
    FileSizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
