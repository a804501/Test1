import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false
    name
    handleClick(){
        this.isVisible = true
    }

    changeHandler(event){
        this.name = event.target.value
    }

    get typedHello(){
        return this.name === "hello"
    }

    // falsy values: 0, false, null, undefined, ""

}