import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { dia, shapes } from '@joint/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testpoc';
  @ViewChild('canvas') canvas!: ElementRef;

    private graph!: dia.Graph;
    private paper!: dia.Paper;

    public ngOnInit(): void {
        const graph = this.graph = new dia.Graph({}, { cellNamespace: shapes });

        const paper = this.paper = new dia.Paper({
            model: graph,
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
