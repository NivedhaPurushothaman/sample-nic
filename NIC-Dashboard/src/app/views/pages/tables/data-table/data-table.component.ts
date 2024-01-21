import { Component, Input, OnInit } from '@angular/core';

import { DataTable } from "simple-datatables";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

  @Input() tableTitle: string;
  @Input() tableColumns: any[];
  @Input() tableData: any[];
}
