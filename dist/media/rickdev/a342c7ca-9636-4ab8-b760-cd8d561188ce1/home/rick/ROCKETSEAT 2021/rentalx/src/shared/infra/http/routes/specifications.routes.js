"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationsRoutes = void 0;
var CreateSpecificationController_1 = require("@modules/cars/useCases/createSpecification/CreateSpecificationController");
var express_1 = require("express");
var ensureAuthenticated_1 = require("@shared/infra/http/middlewares/ensureAuthenticated");
var ensureAdmin_1 = __importDefault(require("../middlewares/ensureAdmin"));
var specificationsRoutes = express_1.Router();
exports.specificationsRoutes = specificationsRoutes;
var createSpecificationController = new CreateSpecificationController_1.CreateSpecificationController();
specificationsRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.default, createSpecificationController.handle);
