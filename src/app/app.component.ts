import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkflowDiagramComponent } from './components/workflow-diagram/workflow-diagram.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WorkflowDiagramComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testpoc';
}
