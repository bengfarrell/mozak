import Template from './template.js';

export default class MozakStrings extends HTMLElement {
    connectedCallback() {
        this.innerHTML = Template.html( this.getAttribute('direction') );
    }
}

customElements.define('mozak-strings', MozakStrings);
