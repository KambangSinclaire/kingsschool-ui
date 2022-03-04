import { HttpResponse } from "@angular/common/http";
import { SharedService } from "../services/shared.service";
import { AlertStatus } from "./response-status.utils";

export const ReponseHandler = (response: any, status: AlertStatus) => {
    const shared = new SharedService();

    if (status === AlertStatus.SUCCESS) {
        shared.setAlert({
            message: response.body?.message,
            status,
            details: ""
        })
    }

    if (status === AlertStatus.ERROR) {
        console.log("error response here ", response);

        shared.setAlert({
            message: response.error?.message,
            status,
            details: ""
        })
    }
}