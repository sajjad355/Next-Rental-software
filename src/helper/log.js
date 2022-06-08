import * as log from "loglevel";
log.enableAll();

export const ErrorLog = (data) => {
    log.error(data);
};