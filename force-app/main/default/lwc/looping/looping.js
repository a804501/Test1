import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["Ford", "Audi", "Maruti", "Hyundai", "Mercedes"]

    ceoList = [
        {
            id:1,
            company:"Google",
            name: "John Smith"
        },
        {
            id:2,
            company:"Facebook",
            name: "Jack Logan"
        },
        {
            id:3,
            company:"Salesforce",
            name: "Marc Paulson"
        },
        {
            id:4,
            company:"Amazon",
            name: "Jeff Bezos"
        }
    ]
}