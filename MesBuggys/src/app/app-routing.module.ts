import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuggysComponent } from './buggys/buggys.component';
import { AddBuggyComponent } from './add-buggy/add-buggy.component';
import { UpdateBuggyComponent } from './update-buggy/update-buggy.component';
const routes: Routes = [
  {path: "buggys", component : BuggysComponent},
  {path: "add-buggy", component : AddBuggyComponent},
  { path: "", redirectTo: "buggys", pathMatch: "full" },
  {path: "updateBuggy/:id", component: UpdateBuggyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
