import { Priority } from "../../models/priority.enum";
import { ITodo } from "../../models/todo.interface";

export const TODO_LIST: ITodo[] = [
    {
        id: 1,
        title: 'Save all code.',
        description: 'Press ctrl + alt + s to save all code.',
        priority: Priority.PriorityThree,
        completed: false,
    },
    {
        id: 2,
        title: 'State all the changes.',
        description: 'Stage all items by pressing on stage all in vscode.',
        priority: Priority.PriorityThree,
        completed: false,
    },
    {
        id: 3,
        title: 'Write commit message.',
        description: 'Write commit message relevant to the tasks you just did.',
        priority: Priority.PriorityThree,
        completed: false,
    },
    {
        id: 4,
        title: 'Commit all changes.',
        description: 'Press commit to commit all the changes.',
        priority: Priority.PriorityThree,
        completed: false,
    },
    {
        id: 5,
        title: 'Push changes.',
        description: 'Push all the commits to the git repo.',
        priority: Priority.PriorityThree,
        completed: false,
    },
]