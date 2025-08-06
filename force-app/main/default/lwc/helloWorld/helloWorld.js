import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    fullname = "Zero To Hero"
    title = "aura"
    changeHandler(event){
        this.title = event.target.value // The handler updates the property
    }

    //@track // track also the nested properties, not only the address property.
    address = {
        city:"Melbourne",
        postcode:3008,
        country:"Australia"
    }

    trackHandler(event){
        this.address.city = event.target.value // Address is not tracked, because a
        // property of the property address got updated, not the property address itself.
        // To solve this problem we have the @track decorator, it will track all nested 
        // properties as well.
        // Instead of the @track decorator, I can use the spread operator, which will 
        // cause the address property to get updated
        this.address = {...this.address, city: event.target.value}
    }

}