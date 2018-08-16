import Template from './template.js';

export default class MozakString extends HTMLElement {
    static get STRUM_EVENT() { return 'onstrum'; }

    strum(params) {
        if (this.timer) { clearTimeout(this.timer); }

        let dur = params.power * 10 + 250;
        this.classList.add('shake', 'shake-constant', `shake-${this.strumDirection}`);
        if (dur < 500) {
            this.classList.add('shake-little');
        }
        this.timer = setTimeout( () => this.stopStrum(), dur);
        let e = new CustomEvent(MozakString.STRUM_EVENT, {
            bubbles: true,
            detail: {
                noteIndex: params.fret,
                numNotes: params.numFrets,
                velocity: params.power,
                duration: dur,
                direction: this.direction
            }});
        this.dispatchEvent(e);
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
