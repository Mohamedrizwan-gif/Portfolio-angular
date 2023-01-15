import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "../pages/index/index.component";
import { ProjectsComponent } from "../pages/projects/projects.component";

const routes: Routes = [
    { path: '', component: IndexComponent, data: { animation: 'IndexPage' } },
    { 
        path: 'projects', 
        component: ProjectsComponent,
        data: { animation: 'ProjectPage' } 
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }