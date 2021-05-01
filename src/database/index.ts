import { createConnection, getConnectionOptions } from "typeorm";

import Category from "../modules/cars/entities/Category";
import Specification from "../modules/cars/entities/Specification";

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = "database"; // Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    entities: [Category, Specification],
    ...options,
  });
});
