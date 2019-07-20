import { AppModule } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
