import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassingParentToChildComponent } from './passing-parent-to-child/passing-parent-to-child.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/passingFromParent', pathMatch: 'full' },
  { path: 'passingFromParent', component: PassingParentToChildComponent },
  { path: 'customDirective', component: CustomDirectiveComponent },
  { path: 'fetchApiData', component: FetchApiDataComponent },
  { path: 'customPipe', component: CustomPipeComponent },
  { path: 'reactiveForm', component: ReactiveFormValidationComponent },
  { path: 'handleError', component: HandleErrorNotificationComponent },
  { path: 'filtersList', component: FiltersListItemsComponent },
  { path: 'routerGuard', component: ImplementRouteGauardComponent },
  { path: 'pagination', component: ImplementPaginationComponent },
  { path: 'toggleVisibility', component: ToggleVisibilityComponent },
  { path: 'fileUpload', component: UploadFilesComponent },
  { path: 'customInput', component: CustomInputwithValidationComponent },
  { path: 'trackChanges', component: TracksChangesInputFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
