import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExternalFeedComponent } from './components/external-feed/external-feed.component';
import {SingleExternalFeedDetailsComponent} from './components/single-external-feed-details/single-external-feed-details.component'

const routes: Routes = [
    {
      path: '',
      component: ExternalFeedComponent,
    },
    {
      path: ':id',
      component: SingleExternalFeedDetailsComponent
    }
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ExternalFeedRoutingModule { }
  