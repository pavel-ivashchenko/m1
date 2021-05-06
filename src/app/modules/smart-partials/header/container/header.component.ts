
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IHeaderDropdownMenu } from '@app/interfaces';

import { DialogService } from '@app/modules/ui/dialog';

import { MAIN_MENU_ITEMS } from '../constants';
import { LoginModalComponent } from '../modals';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() public isShrinked = false;

  public menuItems: IHeaderDropdownMenu[] = MAIN_MENU_ITEMS;
  public isOpen = false;
  public get userMenuSettings() {
    return {
      title: this.user?.name || 'User',
      icon: '/assets/img/svg/user.svg'
    }
  };
  private user = null;

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit(): void { }
  
  public onUserClick(): void {
    if (this.user) {
      
    } else {
      this.showLoginModal();
    }
  }
  
  private showLoginModal(): void {
    this.dialogService.open(LoginModalComponent).afterClosed.subscribe(
      result => console.log('Dialog closed', result)
    );
  }

}
