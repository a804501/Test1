import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    // examples of some local properties
    name // undefined
    age=30
    fullname = "Zero To Hero"
    showdata = false
    details={
        name:"dummy",
        place:"Melbourne"
    }
    userlist = ["A", "B", "C"]


}