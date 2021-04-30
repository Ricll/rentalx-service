import { createConnection, getConnectionOptions } from "typeorm";

import Category from "../modules/cars/entities/Category";

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = "database"; // Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    entities: [Category],
    ...options,
  });
});
