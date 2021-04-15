import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiRoutesService } from 'projects/shared-services/api-routes.service';
import { API_ROUTES } from 'projects/shared-services/api-routes.constants';
import { ISingleExternalFeed } from 'projects/shared-models/single-external-feed.model';

@Injectable({
  providedIn: 'root'
})
export class SingleExternalFeedService {

  constructor(
    private http: HttpClient,
    private apiRoutesService: ApiRoutesService
  ) { }

  pGetAll(): Observable<ISingleExternalFeed[]>{
    return this.http.get<ISingleExternalFeed[]>(
        this.apiRoutesService.getFeedRoute(API_ROUTES.EXTERNAL_FEEDS.INDEX));
  }

  pShow(id): Observable<ISingleExternalFeed>{
    const params = new HttpParams().set('id', id);
    return this.http.get<ISingleExternalFeed>(
        this.apiRoutesService.getFeedRoute(API_ROUTES.EXTERNAL_FEEDS.SHOW), {params});
  }


}