import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    fullname = "Zero To Hero"
    title = "aura"

    changeHandler(event){
        this.title = event.target.value // The handler updates the property
    }

}