import { SharedService } from "../services/shared.service";
import { AlertStatus } from "./response-status.utils";

export const ReponseHandler = (response: any, status: AlertStatus) => {
    const shared = new SharedService();

    if (status === AlertStatus.SUCCESS) {
        shared.setAlert({
            message: "Wow",
            status,
            details: response.body?.message,
            color: "green"
        })
    }
    if (status === AlertStatus.ERROR) {
        shared.setAlert({
            message: "Ooops",
            status,
            details: response.error?.message,
            color: "red"
        })
    }
}