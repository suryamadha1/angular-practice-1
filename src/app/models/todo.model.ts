import {Owner} from './owner.model';

export class Todo {
    constructor(
        public id: number,
        public description: string,
        public completed: boolean, 
        public owner: Owner
    ) {

    }
}
