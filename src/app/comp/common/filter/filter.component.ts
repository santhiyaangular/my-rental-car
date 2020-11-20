import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() filterInputData = [];
  @Input() filterType = '';
  @Output() itemSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelection(filter: string): void{
    this.itemSelected.emit(filter);
  }

}
