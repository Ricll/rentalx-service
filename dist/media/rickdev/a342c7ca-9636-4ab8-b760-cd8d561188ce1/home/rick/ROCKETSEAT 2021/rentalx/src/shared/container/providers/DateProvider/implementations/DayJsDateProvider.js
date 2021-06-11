"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayJsDateProvider = void 0;
var dayjs_1 = __importDefault(require("dayjs"));
var utc_1 = __importDefault(require("dayjs/plugin/utc"));
dayjs_1.default.extend(utc_1.default);
var DayJsDateProvider = /** @class */ (function () {
    function DayJsDateProvider() {
    }
    DayJsDateProvider.prototype.compareInHours = function (start_date, end_date) {
        var end_date_utc = this.convertToUTC(end_date);
        var start_date_utc = this.convertToUTC(start_date);
        return dayjs_1.default(end_date_utc).diff(start_date_utc, "hours");
    };
    DayJsDateProvider.prototype.convertToUTC = function (date) {
        return dayjs_1.default(date).utc().local().format();
    };
    DayJsDateProvider.prototype.dateNow = function () {
        return dayjs_1.default().toDate();
    };
    DayJsDateProvider.prototype.compareInDays = function (start_date, end_date) {
        var end_date_utc = this.convertToUTC(end_date);
        var start_date_utc = this.convertToUTC(start_date);
        return dayjs_1.default(end_date_utc).diff(start_date_utc, "days");
    };
    DayJsDateProvider.prototype.addDays = function (days) {
        return dayjs_1.default().add(days, "days").toDate();
    };
    DayJsDateProvider.prototype.addHours = function (hours) {
        return dayjs_1.default().add(hours, "hour").toDate();
    };
    DayJsDateProvider.prototype.compareIfBefore = function (start_date, end_date) {
        return dayjs_1.default(start_date).isBefore(end_date);
    };
    return DayJsDateProvider;
}());
exports.DayJsDateProvider = DayJsDateProvider;
