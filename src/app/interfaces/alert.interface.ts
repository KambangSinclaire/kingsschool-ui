import { AlertStatus } from "../utils/response-status.utils";

export interface IAlert {
    message?: string;
    details?: string;
    status?: AlertStatus;
}