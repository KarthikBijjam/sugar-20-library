import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 's20p-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.scss'],
  standalone: true, // Have to update, Instead of using ngModule from angular 14 standlone feature got implemented
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class NavbarComponent {
  @Input() who: string = 'World';
}