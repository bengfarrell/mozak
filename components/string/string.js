import Template from './template.js';

export default class MozakString extends HTMLElement {
    strum(dir, power) {
        if (this.timer) { clearTimeout(this.timer); }

        this.classList.add('shake', 'shake-constant', `shake-${this.strumDirection}`);
        this.timer = setTimeout( () => this.stopStrum(), 1000);
    }

    stopStrum() {
        this.classList.remove('shake', 'shake-constant', `shake-${this.strumDirection}`);
    }

    connectedCallback() {
        this.direction = this.getAttribute('direction');
        this.strumDirection = this.direction === 'horizontal' ? 'vertical' : 'horizontal';
        this.innerHTML = Template.html( this.getAttribute('direction') );
    }
}

customElements.define('mozak-string', MozakString);
