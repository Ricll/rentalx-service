import User from "@modules/accounts/infra/typeorm/entities/User";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { CarImage } from "@modules/cars/infra/typeorm/entities/CarImage";
import Category from "@modules/cars/infra/typeorm/entities/Category";
import Specification from "@modules/cars/infra/typeorm/entities/Specification";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "database"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host: process.env.NODE_ENV === "test" ? "localhost" : host,
      database:
        process.env.NODE_ENV === "test"
          ? "rentx_test"
          : defaultOptions.database,
      entities: [User, Category, Specification, Car, CarImage, Rental],
    }),
  );
};
