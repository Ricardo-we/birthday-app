import { safeDateParse } from "../date.utils";
import { firstLetterUpperCase } from "../string.utils";

interface DateFromObjectProps {
  year?: number;
  monthIndex?: number;
  date?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  ms?: number;
}

/*** SimpleDate is a date utils class*/
export class SimpleDate {
  private date: Date;

  /*** Can be used as a Date
   * @param initialDate
   */
  constructor(initialDate?: Date | string | null | SimpleDate) {
    this.date =
      initialDate instanceof SimpleDate
        ? safeDateParse(initialDate.b())
        : safeDateParse(initialDate);
    if (isNaN(this.date as any)) this.date = new Date();
  }

  /*** Return time difference in miliseconds
   * @param date1 Date | string
   * @param date2 Date | string
   */
  static getDateDifference = (date1?: Date | string, date2?: Date | string) => {
    const date1_ = new SimpleDate(date1).build();
    const date2_ = new SimpleDate(date2).build();
    return date1_.getTime() - date2_.getTime();
  };
  /**
   * Sets the year of the date.
   * @param year - The year value.
   * @returns The modified SimpleDate instance.
   */
  setYear(year: number) {
    this.date.setFullYear(year);
    return this;
  }

  /**
   * Sets the month of the date.
   * @param month - The month value (0-11).
   * @returns The modified SimpleDate instance.
   */
  setMonth(month: number) {
    this.date.setMonth(month);
    return this;
  }

  /**
   * Sets the hours of the date.
   * @param hours - The hours value (0-23).
   * @returns The modified SimpleDate instance.
   */
  setHours(hours: number) {
    this.date.setHours(hours);
    return this;
  }

  /**
   * Sets the minutes of the date.
   * @param minutes - The minutes value (0-59).
   * @returns The modified SimpleDate instance.
   */
  setMinutes(minutes: number) {
    this.date.setMinutes(minutes);
    return this;
  }

  /**
   * Sets the seconds of the date.
   * @param seconds - The seconds value (0-59).
   * @returns The modified SimpleDate instance.
   */
  setSeconds(seconds: number) {
    this.date.setSeconds(seconds);
    return this;
  }

  /**
   * Sets the milliseconds of the date.
   * @param ms - The milliseconds value (0-999).
   * @returns The modified SimpleDate instance.
   */
  setMilliseconds(ms: number) {
    this.date.setMilliseconds(ms);
    return this;
  }

  /***
   * Makes all time to 0, 00:00:00
   */
  toZeroTime = () => {
    return this.setHours(0).setSeconds(0).setMilliseconds(0).setMinutes(0);
  };
  /**
   * Sets the time of the date to 00:00:00 UTC.
   * @returns The modified SimpleDate instance.
   */
  toZeroUtcTime() {
    return this.setUTCHours(0, 0, 0, 0);
  }

  /**
   * Sets the day of the month of the date.
   * @param dayOfMonth - The day of the month value (1-31).
   * @returns The modified SimpleDate instance.
   */
  setDayOfMonth(dayOfMonth: number) {
    this.date.setDate(dayOfMonth);
    return this;
  }

  /**
   * Sets the UTC hours, minutes, seconds, and milliseconds of the date.
   * @param utcHours - The UTC hours value (0-23).
   * @param min - The minutes value (optional, 0-59).
   * @param sec - The seconds value (optional, 0-59).
   * @param ms - The milliseconds value (optional, 0-999).
   * @returns The modified SimpleDate instance.
   */
  setUTCHours(utcHours: number, min?: number, sec?: number, ms?: number) {
    this.date.setUTCHours(utcHours, min, sec, ms);
    return this;
  }

  /*** Adds dasy to current date day of month */
  addDays = (days: number) => {
    this.date.setDate(this.dayOfMonth() + days);
    return this;
  };

  /*** Adds years to current date year */
  addYears = (years: number) => {
    this.date.setFullYear(this.year() + years);
    return this;
  };

  /*** Adds months to current date month */
  addMonths = (months: number) => {
    this.date.setMonth(this.date.getMonth() + months);
    return this;
  };

  /**
   * Returns the date formatted as an ISO string.
   * @returns The ISO date string.
   */
  isoDateStr() {
    return this.date.toISOString();
  }

  /**
   * Returns the date formatted as an ISO date string (YYYY-MM-DD).
   * @returns The ISO date string.
   */
  isoDateOnlyStr() {
    return this.date.toISOString().split("T")[0];
  }

  /**
   * Returns the date formatted as a UTC string.
   * @returns The UTC date string.
   */
  utcDateStr() {
    return this.date.toUTCString();
  }

  /**
   * Returns the day of the month of the date.
   * @returns The day of the month (1-31).
   */
  dayOfMonth() {
    return this.date.getDate();
  }

  /**
   * Returns the day of the week of the date.
   * @returns The day of the week (0-6, where Sunday is 0 and Saturday is 6).
   */
  dayOfWeek() {
    return this.date.getDay();
  }

  /**
   * Returns the year of the date.
   * @returns The year.
   */
  year() {
    return this.date.getFullYear();
  }

  /**
   * Returns the time value of the date.
   * @returns The time value.
   */
  time() {
    return this.date.getTime();
  }

  /**
   * Returns the month of the date.
   * @returns The month (1-12).
   */
  month() {
    return (this.date.getMonth() ?? 0) + 1;
  }

  /**
   * Returns the date formatted as a localized date string.
   * @param locale The locale or locales to use for formatting. Optional.
   * @param options The options object that contains custom formatting options. Optional.
   * @returns The localized date string.
   */
  localeDateStr(
    locale?: Intl.LocalesArgument,
    options?: Intl.DateTimeFormatOptions
  ) {
    return this.date.toLocaleDateString(locale, options);
  }

  /**
   * Returns the date formatted as a localized string.
   * @returns The localized date and time string.
   */
  localeStr() {
    return this.date.toLocaleString();
  }

  /**
   * Returns the time formatted as a localized time string.
   * @returns The localized time string.
   */
  localeTimeStr() {
    return this.date.toLocaleTimeString();
  }

  /**
   * Returns the localized name of the month.
   * @param locale The locale to use for formatting.
   * @returns The localized month name.
   */
  monthName(locale: string) {
    return firstLetterUpperCase(
      this.date.toLocaleDateString(locale, { month: "long" })
    );
  }

  /*** @build and @b does exactly the same */
  build = () => this.date;
  b = () => this.date;

  static isValidDateString = (dateString: string): boolean => {
    const date = new Date(dateString);
    try {
      date.toISOString();
      return true;
    } catch (error) {
      return false;
    }
  };

  /*** Creates a SimpleDate instance based on an object like 
   * This function allows to set year when creating the date
   * @param {
		year?: number;
		monthIndex?: number;
		date?: number;
		hours?: number;
		minutes?: number;
		seconds?: number;
		ms?: number;
	} 
	*/
  static dateFromObject = (dateProps: DateFromObjectProps = {}) => {
    const defaultValues = new Date();

    const date = new Date(
      dateProps?.year ?? defaultValues.getFullYear(),
      dateProps?.monthIndex ?? defaultValues.getMonth(),
      dateProps?.date ?? defaultValues.getDate(),
      dateProps?.hours ?? defaultValues.getHours(),
      dateProps?.minutes ?? defaultValues.getMinutes(),
      dateProps?.seconds ?? defaultValues.getSeconds(),
      dateProps?.ms ?? defaultValues.getMilliseconds()
    );

    return new SimpleDate(date);
  };

  static firstDateOfYear = (year: number = simpleDate().year()) => {
    return SimpleDate.dateFromObject({
      year,
    })
      .setDayOfMonth(1)
      .setMonth(0)
      .toZeroTime();
  };

  toFirstDate = () => {
    return this.setDayOfMonth(1).setMonth(0).toZeroTime();
  };

  hours = () => this.date.getHours();
  mins = () => this.date.getMinutes();
  ms = () => this.date.getMilliseconds();

  getDmyhmsTime = () => {
    return `${this.dayOfMonth()}${this.month()}${this.year()}_${this.hours()}${this.mins()}${this.ms()}`;
  };

  lastDayOfMonth = () => {
    this.date.setMonth(this.month() + 1);
    this.date.setDate(0);
    return this;
  }
}

export const simpleDate = (date?: string | Date | null | SimpleDate) =>
  new SimpleDate(date);
export const simpleDateFromObject = (dateFromObject?: DateFromObjectProps) =>
  SimpleDate.dateFromObject(dateFromObject);
