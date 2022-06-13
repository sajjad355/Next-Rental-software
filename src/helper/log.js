import * as log from "loglevel";
log.enableAll();

export const ErrorLog = (error) => {
    log.error(error);
};