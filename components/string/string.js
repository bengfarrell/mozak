import Template from './template.js';

export default class MozakString extends HTMLElement {
    connectedCallback() {
        this.innerHTML = Template.html( this.getAttribute('direction') );
    }
}

customElements.define('mozak-string', MozakString);
