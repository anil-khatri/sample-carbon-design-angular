import { Component, ElementRef, ViewChild } from '@angular/core';
import { dia, shapes } from '@joint/core';

@Component({
  selector: 'app-workflow-diagram',
  imports: [],
  templateUrl: './workflow-diagram.component.html',
  styleUrl: './workflow-diagram.component.scss'
})
export class WorkflowDiagramComponent {
  @ViewChild('canvas') canvas!: ElementRef;

    private graph!: dia.Graph;
    private paper!: dia.Paper;

  public ngOnInit(): void {
    const graph = this.graph = new dia.Graph({}, { cellNamespace: shapes });

    const paper = this.paper = new dia.Paper({
      model: this.graph,
      background: {
        color: '#F8F9FA',
      },
      frozen: true,
      async: true,
      cellViewNamespace: shapes
    });

    const rect = new shapes.standard.Rectangle({
      position: { x: 100, y: 100 },
      size: { width: 100, height: 50 },
      attrs: {
        label: {
          text: 'Hello World'
        }
      }
    });

    this.graph.addCell(rect);
  }

  public ngAfterViewInit(): void {
    const { paper, canvas } = this;
    paper.unfreeze();
  }
}
