import { Component,AfterViewInit } from '@angular/core';
import {TestService} from "./test.service";
import {Observable} from "rxjs/Observable";
const $ = require('jquery');
const echarts = require('echarts');
@Component({
    selector: 'test',
    // providers: [NgLayer],
    template: `
    <div>
      <h1 myHighlight>Test</h1>
      <input type="button" value="换肤" (click)="changeCss()">
      <custom-data-dnd></custom-data-dnd>
      <demo-modal-static></demo-modal-static>
      <single-demo></single-demo>
      <div id="main" style="width: 600px;height:400px;"></div>
      <input type="text" [(ngModel)]="queryString"/><input type="button" (click)="search()" value="搜索"/>
      <pre>{{data | json}}</pre>
    </div>
  `
})
export class TestComponent implements AfterViewInit{
    constructor(private testService: TestService){
        console.log($('#commoncss'));
        // $('#commoncss').attr('href','');
    }

    private data:any = {};

    private queryString: string = '*:*';

    // private observ: Observable<any> = this.testService.get(this.queryString);

    private set observ(observ){
        observ.subscribe(data => 
            this.data = JSON.parse(data['_body']),
            err => 
            console.log(err)
        );
        observ.subscribe(data => 
            console.log(data)
        );
    }

    private changeCss = () => {
        $('#commoncss').attr('href','');
        // $('#commoncss').attr('href','https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
    }

    private search = () => {
        this.observ = this.testService.get(this.queryString);
        // this.observ.subscribe(data => 
        //     this.data = JSON.parse(data['_body'])
        // );
        // this.observ.subscribe(data => 
        //     console.log(data)
        // );
    }

    // private set data(d){
    //     this.thisData = d;
    //     console.log(d);
    // }
    // private get data(){
    //     return this.thisData;
    // }

    ngAfterViewInit(): void {
        this.observ = this.testService.get(this.queryString);
        console.log(this.data);
        $('h1').html('$Test');
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
