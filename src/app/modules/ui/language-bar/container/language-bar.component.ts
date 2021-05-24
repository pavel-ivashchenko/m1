
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ILanguageBarItem } from '../interfaces';


const MockItems = [
  { id: 'en', name: 'EN' },
  { id: 'ua', name: 'UA' },
  { id: 'ru', name: 'RU' }
];

@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageBarComponent implements OnInit {
  
  @Input() items: ILanguageBarItem[] = MockItems;
  @Input() current: ILanguageBarItem = MockItems[0];
  
  public current$: BehaviorSubject<ILanguageBarItem> = new BehaviorSubject(null);
  public listItems$: BehaviorSubject<ILanguageBarItem[]> = new BehaviorSubject(null);
  public isOpened$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public checkId = 'lang-bar-item';
  
  private componentDestroyed$: Subject<void> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.setValues(this.current || this.items[0] || null);
  }
  
  public onMenuClick(): void {
    this.isOpened$.next(!this.isOpened$.value);
  }
  
  public onItemClick(event: MouseEvent, item: ILanguageBarItem): void {
    event.preventDefault();
    event.stopPropagation();
    this.isOpened$.next(false);
    this.setValues(item);
  }
  
  private setValues(item: ILanguageBarItem): void {
    this.current$.next(item);
    this.listItems$.next(this.items.filter(i => i !== item));
  }
  
  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

}