class Task {
    public message: string;
    public dueDate: Date;

    constructor(message: string, dueDate: Date) {
        this.message = message;
        this.dueDate = dueDate;
    }
}

export {Task};