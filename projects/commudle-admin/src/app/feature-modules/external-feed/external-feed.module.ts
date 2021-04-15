import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalFeedComponent } from './components/external-feed/external-feed.component';
import { ExternalFeedRoutingModule } from './external-feed-routing.module';
import {
  NbCardModule,
  NbSelectModule,
  NbInputModule,
  NbButtonModule,
  NbIconModule,
  NbPopoverModule,
  NbCheckboxModule
} from '@nebular/theme';
import { SingleExternalFeedDetailsComponent } from './components/single-external-feed-details/single-external-feed-details.component';

@NgModule({
  declarations: [ExternalFeedComponent, SingleExternalFeedDetailsComponent],
  imports: [
    CommonModule,
    ExternalFeedRoutingModule,

    // nebular
    NbCardModule,
    NbSelectModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbPopoverModule,
    NbCheckboxModule
  ]
})
export class ExternalFeedModule { }
