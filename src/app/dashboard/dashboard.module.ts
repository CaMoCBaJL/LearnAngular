import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard-component/dashboard.component";
import {SharedModule} from "../shared/shared.module";
import { ActiveTaskComponent } from './active-task/active-task.component';
import { DatePipe } from "@angular/common";
import { TodayTaskComponent } from './today-task/today-task.component';
import { CompletedTasksGraphComponent } from './completed-tasks-graph/completed-tasks-graph.component';
import { TeamMembersListComponent } from './team-members-list/team-members-list.component';

@NgModule({
  exports: [
    DashboardComponent,
    ActiveTaskComponent
  ],
  imports: [
    SharedModule,
    DatePipe
  ],
  declarations: [
    DashboardComponent,
    ActiveTaskComponent,
    TodayTaskComponent,
    CompletedTasksGraphComponent,
    TeamMembersListComponent
  ]
})
export class DashboardModule {

}
