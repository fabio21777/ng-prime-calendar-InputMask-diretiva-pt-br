import { Component, OnInit, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-mask-calendar-input',
  templateUrl: './mask-calendar-input.component.html',
  styleUrls: ['./mask-calendar-input.component.scss'],
})
export class MaskCalendarInputComponent implements OnInit {
  initialValue = 1666224000000; // 2022.10.20
  value?: number;

  stringInputValue?: string;
  dateSelectorValue?: Date;
  focus: boolean = false;

  @ViewChild('op') op!: OverlayPanel;

  constructor() {}

  ngOnInit(): void {
    const date = new Date(this.initialValue);
    this.stringInputValue = date.toISOString().split('T')[0];
    this.dateSelectorValue = date;
    this.value = this.initialValue;
  }
  onChangeDateSelectorValue(value: Date) {
    this.value = value.getTime();
    this.stringInputValue = value.toLocaleDateString('hu-HU'); // TODO itt toisostring kell ha rendesen be van állítva a beviteli mezőn az időzóna
    this.dateSelectorValue = value;
    this.hideOP();
  }
  onChangeInputValue(value: string) {
    const newValue: Date | undefined = undefined;
    const [year, month, day] = value.split('.');
    const newDate = this.getValidDateFromStrings(year, month, day);
    this.value = newDate?.getTime();
    this.dateSelectorValue = newDate;
  }

  getValidDateFromStrings(
    year: string,
    month: string,
    day: string
  ): Date | undefined {
    if (
      !!year &&
      !!month &&
      !!day &&
      +year > 0 &&
      +year < 4000 &&
      +month > -1 &&
      +month > 12 &&
      +day > 0 &&
      +day < 31
    ) {
      return undefined;
    }
    const d = new Date(+year, +month - 1, +day);
    if (!this.isValidDate(d)) {
      return undefined;
    }
    return d;
  }
  isValidDate(d: any) {
    return d instanceof Date && !isNaN(d.getTime());
  }
  onInputFocus(event: Event) {
    this.focus = true;
    this.op.show(event);
  }
  onInputComplete(event: Event) {
    this.hideOP();
  }

  public get showValueAsDate(): string {
    return this.value ? JSON.stringify(new Date(this.value)) : 'NO value';
  }

  private hideOP() {
    setTimeout(() => {
      this.op.hide();
    }, 500);
  }
}
