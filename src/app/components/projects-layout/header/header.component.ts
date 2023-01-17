import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-project-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class ProjectHeaderComponent {
    @Input('fullstack') fullstack: any;
    @Input('datascience') datascience: any;
    public fsclicked = false;
    public dsclicked = false;

    onNavigate(navigate: string): void {
        if (navigate === 'fullstack') {
            this.fullstack.scrollIntoView({ behavior: 'smooth' });
            this.fsclicked = true;
            this.dsclicked = false;
        }
        else {
            this.datascience.scrollIntoView({ behavior: 'smooth' });
            this.dsclicked = true;
            this.fsclicked = false;
        }
    }
}