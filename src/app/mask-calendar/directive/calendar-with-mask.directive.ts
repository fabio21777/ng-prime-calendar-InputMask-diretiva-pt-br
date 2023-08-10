import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { Calendar } from 'primeng/calendar';

/**
 * https://stackoverflow.com/questions/56395537/how-to-apply-mask-behavior-in-primeng-calendar-p-calendar
 * https://stackblitz.com/github/B1ker4nt3nd/CalendarInputMask?file=src/app/mask-calendar/mask-calendar-input/mask-calendar-input.component.html
 *
 */

@Directive({
  selector: '[appCalendarWithMask]',
})
export class CalendarWithMaskDirective implements AfterViewInit {
  constructor(private el: ElementRef, private calendar: Calendar) {}

  ngAfterViewInit(): void {
    this.calendar.onInput.subscribe((event: InputEvent) => {
      const actualValue = this.getValue();

      if (event.data === '/' && actualValue.length > 8) {
        this.handleDaySlash(actualValue);
        return;
      }

      if (event.data === '/' && actualValue.length > 6) {
        this.handleMonthSlash(actualValue);
        return;
      }

      if (event.data === '/' && [5, 8].includes(actualValue.length)) {
        return;
      }

      this.applyDateMask(actualValue);
    });
  }

  private getValue(): string {
    return this.calendar.inputfieldViewChild.nativeElement.value;
  }

  private handleDaySlash(actualValue: string): void {
    const day = this.extractDayFromValue(actualValue);
    const paddedDay = this.padValue(day);
    this.setValueToCalendar(`${paddedDay}/`);
  }

  private handleMonthSlash(actualValue: string): void {
    const month = this.extractMonthFromValue(actualValue);
    const paddedMonth = this.padValue(month);
    this.setValueToCalendar(`${paddedMonth}/`);
  }

  private extractDayFromValue(value: string): string {
    const slashIndex = value.indexOf('/');
    return value.substring(slashIndex + 1).replace('/', '');
  }

  private extractMonthFromValue(value: string): string {
    const trimmedValue = value.replace(/\/$/, '');
    const slashIndex = trimmedValue.lastIndexOf('/');
    return trimmedValue.substring(slashIndex + 1).replace('/', '');
  }

  private padValue(value: string): string {
    return value.length && value.length < 2 ? '0'.concat(value) : value;
  }

  private applyDateMask(value: string): void {
    const trimmedValue = value.replace(/[^0-9]/g, '').substring(0, 8);
    const formattedValue = trimmedValue
      .replace(/^(\d{2})(\d)/, '$1/$2')
      .replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3')
      .substring(0, 10);
    this.setValueToCalendar(formattedValue);
  }

  private setValueToCalendar(value: string): void {
    if (this.calendar.inputfieldViewChild.nativeElement.value !== value) {
      this.calendar.inputfieldViewChild.nativeElement.value = value;
      try {
        const parsedValue = this.calendar.parseValueFromString(value);
        if (this.calendar.isValidSelection(parsedValue)) {
          this.calendar.updateModel(parsedValue);
          this.calendar.updateUI();
        }
      } catch (err) {
        const parsedValue = this.calendar.keepInvalid ? value : null;
        this.calendar.updateModel(parsedValue);
      }
      this.calendar.filled = value != null && value.length > 0;
    }
  }
}
