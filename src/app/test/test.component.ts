import { Component,AfterViewInit } from '@angular/core';
import {TestService} from "./test.service";
import {Observable} from "rxjs/Observable";
const $ = require('jquery');
const echarts = require('echarts');
@Component({
    selector: 'test',
    template: `
    <div>
      <h1 myHighlight>Testt</h1>
      <div id="main" style="width: 600px;height:400px;"></div>
      <input type="text" [(ngModel)]="queryString"/><input type="button" (click)="search()" value="搜索"/>
      <pre>{{data | json}}</pre>
    </div>
  `
})
export class TestComponent implements AfterViewInit{
    constructor(private testService: TestService){}

    private data: any = {};

    private queryString: string = '*:*';

    private search = () => {
      console.log('click')
      this.testService.get(this.queryString).subscribe(data => this.data = JSON.parse(data['_body']));
    }

    ngAfterViewInit(): void {
        console.log(this.data);
        $('h1').html('$Testt');
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
}
