import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "../pages/index/index.component";
import { DataScienceComponent } from "../pages/datascience/datascience.component";

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'data-science', component: DataScienceComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }