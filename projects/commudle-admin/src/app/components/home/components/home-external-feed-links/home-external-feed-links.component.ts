import { Component, OnInit } from '@angular/core';
import { ISingleExternalFeed } from 'projects/shared-models/single-external-feed.model';
import {HomeService} from 'projects/commudle-admin/src/app/services/home.service';
import { SingleExternalFeedService } from 'projects/commudle-admin/src/app/services/external-feeds.service';

@Component({
  selector: 'app-home-external-feed-links',
  templateUrl: './home-external-feed-links.component.html',
  styleUrls: ['./home-external-feed-links.component.scss']
})
export class HomeExternalFeedLinksComponent implements OnInit {

  feeds: ISingleExternalFeed[] = [];

  constructor(
    private homeService: HomeService) { }

  ngOnInit(): void {
    this.getFeed();
  }

  getFeed(): void{
    this.homeService.feed().subscribe(value=> {
      console.log(value);
      this.feeds = value.slice(0, 3)
      console.log(this.feeds);
    });
  }

}
