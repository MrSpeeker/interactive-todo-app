import { Priority } from "./priority.enum";

export interface ITodo {
    id: number;
    title: string;
    description: string;
    priority: Priority;
    completed: boolean;
}