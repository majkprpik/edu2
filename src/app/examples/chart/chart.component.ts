import { Component, OnInit } from '@angular/core';
import { AppService, ComplaintsWithPercent } from 'src/app/services/app.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  dataSource: ComplaintsWithPercent[];

  constructor(service: AppService) {
      this.dataSource = service.getComplaintsData()
  }

  customizeTooltip = (info: any) => {
      return {
          html: "<div><div class='tooltip-header'>" +
              info.argumentText + "</div>" +
              "<div class='tooltip-body'><div class='series-name'>" +
              info.points[0].seriesName +
              ": </div><div class='value-text'>" +
              info.points[0].valueText +
              "</div><div class='series-name'>" +
              info.points[1].seriesName +
              ": </div><div class='value-text'>" +
              info.points[1].valueText +
              "% </div></div></div>"
      };
  }

  customizeLabelText = (info: any) => {
      return info.valueText + "%";
  }

  ngOnInit() {
  }

}
