export class LocalStore {
    static setItem(key: string, value: any) {
        if (typeof value === "string") {
            localStorage.setItem(key, value)
        }
        if (typeof value === "object" || typeof value === "number") {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }

    static getItem(key: string, payloadType: any) {
        try {
            if (typeof payloadType === "string" && typeof key === "string") return localStorage.getItem(key) ?? ""
            if (typeof payloadType === "object") {
                return JSON.parse(localStorage.getItem(key) ?? "")
            }
        } catch (error) {
            return false
        }
    }
}