import { IAttachedFile } from './attached-file.model';
import {FeedSource} from './feed-source.model'
import {Tag} from  './feed-tag.model'

export interface ISingleExternalFeed {
  // id: number;
  // source: string;
  id: number;
  comments: number;
  created_at: string;
  image_url: string;
  item_link: string;
  likes: number;
  published_at: string;
  source: FeedSource;
  tags: Tag[];
  title: string;

  // description: string;
  
  
  updated_at: string;
  
  // likes_count: number;
  
  // comments_count: number;
  
  // images: IAttachedFile[];
  
  // tags: string[];
  
}