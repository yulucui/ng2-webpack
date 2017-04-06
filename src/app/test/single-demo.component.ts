import { Component } from '@angular/core';
 
@Component({
  selector: 'single-demo',
  template: `<div style="width: 300px; margin-bottom: 20px;">
  <h3>Select a single city</h3>
  <ng-select [allowClear]="true"
              [items]="items"
              [disabled]="disabled"
              (data)="refreshValue($event)"
              (selected)="selected($event)"
              (removed)="removed($event)"
              (typed)="typed($event)"
              placeholder="No city selected">
  </ng-select>
  disabled: {{disabled}}
  <p></p>
  <pre>{{value.text}}</pre>
  <div>
    <button type="button" class="btn btn-primary"
            (click)="disabledV()" btnCheckbox
            btnCheckboxTrue="1" btnCheckboxFalse="0">
      {{disabled === '1' ? 'Enable' : 'Disable'}}
    </button>
  </div>
</div>`
})
export class SingleDemoComponent {
  public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];
 
  private value:any = {};
  // private _disabledV:string = '0';
  private disabled:boolean = false;
 
  private disabledV() {
    this.disabled = !this.disabled;
  }
 
  // private set disabledV(value:string) {
  //   this._disabledV = value;
  //   this.disabled = this._disabledV === '1';
  // }
 
  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }
 
  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }
 
  public typed(value:any):void {
    console.log('New search input: ', value);
  }
 
  public refreshValue(value:any):void {
    this.value = value;
  }
}