"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var DayJsDateProvider_1 = require("./implementations/DayJsDateProvider");
tsyringe_1.container.registerSingleton("DayJsDateProvider", DayJsDateProvider_1.DayJsDateProvider);
