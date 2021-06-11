"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var LocalStorageProvider_1 = require("./im\u1E55lementations/LocalStorageProvider");
var S3StorageProvider_1 = require("./im\u1E55lementations/S3StorageProvider");
var diskStorage = {
    local: LocalStorageProvider_1.LocalStorageProvider,
    s3: S3StorageProvider_1.S3StorageProvider,
};
tsyringe_1.container.registerSingleton("StorageProvider", diskStorage[process.env.disk]);
