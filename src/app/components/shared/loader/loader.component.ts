import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStateManager } from 'src/app/state/app.state';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private state:AppStateManager) { }

  @Input('styles') styles: any;

  isLoading: Observable<boolean> = this.state.getLoader();

  ngOnInit(): void {
  }

}
