import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'interviewApp';
  name: string = '';

  questionList = [
    { name: 'Display a list of items passed from the parent component', route: 'passingFromParent' },
    { name: 'Custom directive to change the background color on mouse hover', route: 'customDirective' },
    { name: 'Service to fetch data from an API and display', route: 'fetchApiData' },
    { name: 'Create a Custom Pipe to Format Dates', route: 'customPipe' },
    { name: 'Implement a Reactive Form with Validation', route: 'reactiveForm' },
    { name: 'Implement a Service to Handle Error Notifications', route: 'handleError' },
    { name: 'Create a Component that Filters a List of Items', route: 'filtersList' },
    { name: 'Build a Router Guard to Prevent Unauthorized Access', route: 'routerGuard' },
    { name: 'Implement a Simple Pagination Component', route: 'pagination' },
    { name: 'Create a Directive to Toggle Visibility', route: 'toggleVisibility' },
    { name: 'Implement a Component to Upload Files', route: 'fileUpload' },
    { name: 'Implement a Custom Input Component with Validation', route: 'customInput' },
    { name: 'Create a Component that Tracks Changes in an Input Form', route: 'trackChanges' },
    { name: 'Implement a Component to Dynamically Load Modules', route: 'passingFromParent' },
    { name: 'Build a Todo List Application with Local Storage', route: 'passingFromParent' },];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.name = String(params.get('name'));
    });
  }

}
