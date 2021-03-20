
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MOCK_ARTICLES } from '../../constants/mock-artcles';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent implements OnInit {
  
  public MOCK_ARTICLES = MOCK_ARTICLES;

  constructor() { }

  ngOnInit(): void { }
  
  public onCopied(): void {
    // to be implemented
  }
  
  public onArticleLoaded(id: string): void {
    // to be implemented
  }
  
  public onLiked(id: string): void {
    // to be implemented
  }

}
