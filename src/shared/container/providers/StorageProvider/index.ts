import { container } from "tsyringe";

import { LocalStorageProvider } from "./imṕlementations/LocalStorageProvider";
import { S3StorageProvider } from "./imṕlementations/S3StorageProvider";
import { IStorageProvider } from "./IStorageProvider";

const diskStorage = {
  local: LocalStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  diskStorage[process.env.disk],
);
