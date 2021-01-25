import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DateService {


    public getTodayUTC(): string {
        return new Date(new Date(new Date().setDate(new Date().getDate())).setHours(23, 59, 59)).toISOString();
    }

    public getTodayMinusDaysUTC(days: number): string {
        return new Date(new Date(new Date().setDate(new Date().getDate() - days)).setHours(0, 0, 0)).toISOString();
    }

    public getTodayDate(): Date {
        return new Date(new Date(new Date().setDate(new Date().getDate())).setHours(23, 59, 59));
    }

    public getTodayMinusDaysDate(days: number): Date {
        return new Date(new Date(new Date().setDate(new Date().getDate() - days)).setHours(0, 0, 0));
    }

    public parseDate(date: string, locale: string): string {
        const dateOnly = date.split('T')[0];
        const dateMil = Date.parse(dateOnly);
        const parsedDate = new Date(dateMil).toLocaleString(locale);
        if (parsedDate.split(',')[1]) {
            return parsedDate.split(',')[0];
        } else {
            return parsedDate.split(' ')[0];
        }
    }

    public parseDateTime(date: string, locale: string): string {
        const dateMil = Date.parse(date);
        const parsedDate = new Date(dateMil).toLocaleString(locale);
        return parsedDate;
    }

    public parseTime(date: string, locale: string): string {
        const dateMil = Date.parse(date);
        const parsedDate = new Date(dateMil).toLocaleString(locale);
        if (parsedDate.split(',')[1]) {
            return parsedDate.split(',')[1].substring(1);
        } else {
            return parsedDate.split(' ')[1];
        }
    }

    public getTimeStamp(date: string): number {
        const dateMil = Math.round(Date.parse(date) / 1000);
        return dateMil;
    }

    public getDifferenceBetweenDates(firstDate: Date, secondDate: Date): number {
        const utc1 = Date.UTC(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate());
        const utc2 = Date.UTC(secondDate.getFullYear(), secondDate.getMonth(), secondDate.getDate());

        return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
    }

    public getAdvancedDifferenceBetweenDates(startDate: Date, endDate: Date): object {
        let difference = Math.abs(endDate.getTime() - startDate.getTime()) / 1000;
        const calculatedTime = {};

        const timeConstanceInSeconds = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60,
            second: 1
        };

        Object.keys(timeConstanceInSeconds).forEach((key) => {
            calculatedTime[key] = Math.floor(difference / timeConstanceInSeconds[key]);
            difference -= calculatedTime[key] * timeConstanceInSeconds[key];
        });

        return calculatedTime;
    }

    public getIsDiffBetweenDatesMoreThan(firstDate: Date, secondDate: Date, days: number): boolean {
        const firstDateInMs = firstDate.getTime();
        const secondDateInMs = secondDate.getTime();
        const daysInMs = new Date(0).setDate(new Date(0).getDate() + days);

        return firstDateInMs - (secondDateInMs + daysInMs) >= 0;
    }

    public getDayFromDate(date: Date): string {
        date = new Date(date);
        const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        const dayIndex = date.getDay();

        return 'COMMON.DATES.' + days[dayIndex];
    }

}
