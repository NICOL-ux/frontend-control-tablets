import { Component,EventEmitter,Input,Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,RouterLinkActive,MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isCollapsed=false;
  @Output() isCollapsedChange= new EventEmitter<boolean>();

  toggleCollapsed() {
    this.isCollapsed=!this.isCollapsed
    this.isCollapsedChange.emit(this.isCollapsed)
  }
}
