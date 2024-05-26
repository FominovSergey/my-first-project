export const tasks = [
    {
        'id': '1',
        'description': 'Выучить JS',
        'status': 'backlog',
    },
    {
        'id': '2',
        'description': 'Выучить React',
        'status': 'backlog',
    },
    {
        'id': '3',
        'description': 'Сделать домашкуку',
        'status': 'backlog',
    },
    {
        'id': '4',
        'description': 'Выпить смузи',
        'status': 'processing',
    },
    {
        'id': '5',
        'descriptiontitle': 'Попить воды',
        'status': 'processing',
    },
    {
        'id': '6',
        'description': 'Позвонить маме',
        'status': 'done',
    },
    {
        'id': '7',
        'description': 'Позвонить папе',
        'status': 'done',
    },
    {
        'id': '8',
        'description': 'Погладить собаку',
        'status': 'basket',
    },
    {
        'id': '9',
        'description': 'отчитаться ))',
        'status': 'basket',
    },
]

export class Task{
    constructor( id, description, status ) {
        this.id = id;
        this.description = description;
        this.status = status;
    }

    toString() {
        return `Task ID: ${this.id}, Description: ${this.description}, Status: ${this.status}`;
    }
}