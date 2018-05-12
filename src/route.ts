import { Controller } from "./controller";

export interface Route<T extends Controller> {
    controller: { new(...args: any[]): T };
    method: keyof T;
}
