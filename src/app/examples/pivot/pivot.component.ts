import { Component, OnInit, ViewChild } from "@angular/core";
import { AppService } from "src/app/services/app.service";
import { DxPivotGridComponent, DxChartComponent } from "devextreme-angular";

@Component({
  selector: "app-pivot",
  templateUrl: "./pivot.component.html",
  styleUrls: ["./pivot.component.scss"]
})
export class PivotComponent implements OnInit {
  @ViewChild(DxPivotGridComponent, { static: false })
  pivotGrid: DxPivotGridComponent;
  @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;

  pivotGridDataSource: any;

  constructor(service: AppService) {
    this.customizeTooltip = this.customizeTooltip.bind(this);

    this.pivotGridDataSource = {
      fields: [
        {
          caption: "Region",
          width: 120,
          dataField: "region",
          area: "row",
          sortBySummaryField: "Total"
        },
        {
          caption: "City",
          dataField: "city",
          width: 150,
          area: "row"
        },
        {
          dataField: "date",
          dataType: "date",
          area: "column"
        },
        {
          groupName: "date",
          groupInterval: "month",
          visible: false
        },
        {
          caption: "Total",
          dataField: "amount",
          dataType: "number",
          summaryType: "sum",
          format: "currency",
          area: "data"
        }
      ],
      store: service.getSales()
    };
  }

  ngAfterViewInit() {
    this.pivotGrid.instance.bindChart(this.chart.instance, {
      dataFieldsDisplayMode: "splitPanes",
      alternateDataFields: false
    });

    setTimeout(() => {
      var dataSource = this.pivotGrid.instance.getDataSource();
      dataSource.expandHeaderItem("row", ["North America"]);
      dataSource.expandHeaderItem("column", [2013]);
    }, 0);
  }

  customizeTooltip(args) {
    return {
      html:
        args.seriesName +
        " | Total<div class='currency'>" +
        args.valueText +
        "</div>"
    };
  }

  ngOnInit() {}
}
