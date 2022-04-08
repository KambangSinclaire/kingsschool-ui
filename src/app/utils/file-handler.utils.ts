import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiRoutes } from "./routes/app.routes";

@Injectable({
    providedIn: "root"
})
export class FileHandler {

    private baseUrl = ApiRoutes.api.baseUrl;
    private routes = ApiRoutes.api;

    constructor(private http: HttpClient) { }

    single(files: any[]) {
        let selectedFile: string = "";
        files.forEach((file: any) => {
            selectedFile = URL.createObjectURL(file);
        });
        return selectedFile;
    }

    multiple(files: any[]) {
        let selectedFile: string[] = [""];
        files.forEach((file: any) => {
            selectedFile.push(URL.createObjectURL(file))
        });
        return selectedFile;
    }

    fileUpload(form: FormData) {
        return this.http.post<any>(`${this.baseUrl}${this.routes.fileUpload.single}`, form);
    }

    manyFilesUpload(form: FormData) {
        return this.http.post<any>(`${this.baseUrl}${this.routes.fileUpload.files}`, form);
    }
}