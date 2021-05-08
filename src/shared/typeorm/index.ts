import User from "@modules/accounts/infra/typeorm/entities/User";
import Category from "@modules/cars/infra/typeorm/entities/Category";
import Specification from "@modules/cars/infra/typeorm/entities/Specification";
import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = "database"; // Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    entities: [User, Category, Specification],
    ...options,
  });
});
