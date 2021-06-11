"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var EtherealMailProvider_1 = require("./implemantations/EtherealMailProvider");
var SESMailProvider_1 = require("./implemantations/SESMailProvider");
var mailProvider = {
    ethereal: tsyringe_1.container.resolve(EtherealMailProvider_1.EtherealMailProvider),
    ses: tsyringe_1.container.resolve(SESMailProvider_1.SESMailProvider),
};
tsyringe_1.container.registerInstance("EtherealMailProvider", mailProvider[process.env.MAIL_PROVIDER]);
