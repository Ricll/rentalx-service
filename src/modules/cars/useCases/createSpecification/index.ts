import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";

import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();

const createSpecificationsUseCase = new CreateSpecificationUseCase(
  specificationsRepository,
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationsUseCase,
);

export { createSpecificationController };
