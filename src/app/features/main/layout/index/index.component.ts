import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-index',
  imports: [MenuComponent, HeaderComponent, SidebarComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent { 
  isSidebarCollapsed = false;

  toggleSidebar(){
    this.isSidebarCollapsed = !this.isSidebarCollapsed // existe a si este abierto o cerrado
    
  }
}
