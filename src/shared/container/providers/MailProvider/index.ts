import { container } from "tsyringe";

import { IMailProvider } from "./IMailProvider";
import { EtherealMailProvider } from "./implemantations/EtherealMailProvider";
import { SESMailProvider } from "./implemantations/SESMailProvider";

const mailProvider = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
};

container.registerInstance<IMailProvider>(
  "EtherealMailProvider",
  mailProvider[process.env.MAIL_PROVIDER],
);
