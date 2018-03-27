import Template from './template.js';

export default class MozakString extends HTMLElement {
    strum(dir, power) {
        if (this.timer) { clearTimeout(this.timer); }

        let dur = power * 10 + 250;
        this.classList.add('shake', 'shake-constant', `shake-${this.strumDirection}`);
        if (dur < 500) {
            this.classList.add('shake-little');
        }
        this.timer = setTimeout( () => this.stopStrum(), dur);
    }

    stopStrum() {
        this.classList.remove('shake', 'shake-constant', `shake-${this.strumDirection}`, 'shake-little');
    }

    connectedCallback() {
        this.direction = this.getAttribute('direction');
        this.strumDirection = this.direction === 'horizontal' ? 'vertical' : 'horizontal';
        this.innerHTML = Template.html( this.getAttribute('direction') );
    }
}

customElements.define('mozak-string', MozakString);
