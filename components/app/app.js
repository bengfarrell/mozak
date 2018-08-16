import Template from './template.js';
import MozakString from '../string/string.js';

export default class MozakApp extends HTMLElement {
    connectedCallback() {
        this.numHorizontalStrings = this.getAttribute('horizontal');
        this.numVerticalStrings = this.getAttribute('vertical');
        this.innerHTML = Template.html({ horizontal: this.numHorizontalStrings, vertical: this.numVerticalStrings});
        this.dom = Template.mapDOM(this);
        this.lastPoint = null;

        this.dom.vertical.addEventListener(MozakString.STRUM_EVENT, e => this.onStrum(e));
        this.dom.horizontal.addEventListener(MozakString.STRUM_EVENT, e => this.onStrum(e));
        document.addEventListener('mousemove', e => this.onMouseMove(e));
    }

    onMouseMove(event) {
        // TODO: this works for mouse movement because of the one pointer, but once expanded larger, the logic will be different
        this.dom.horizontal.points = [ { last: this.lastPoint, current: { x: event.pageX, y: event.pageY } } ];
        this.dom.vertical.points = [ { last: this.lastPoint, current: { x: event.pageX, y: event.pageY } } ];
        this.lastPoint = { x: event.pageX, y: event.pageY };
    }

    onStrum(event) {
        this.dom.audio.playNote({
            noteIndex: event.detail.noteIndex,
            numNotes: event.detail.numNotes,
            velocity: event.detail.velocity,
            delay: event.detail.delay });
    }
}

customElements.define('mozak-app', MozakApp);
