import Template from './template.js';

export default class MozakApp extends HTMLElement {
    connectedCallback() {
        this.innerHTML = Template.html();
        this.dom = Template.mapDOM(this);
        this.lastPoint = null;
        document.addEventListener('mousemove', e => this.onMouseMove(e));
    }

    onMouseMove(event) {
        // TODO: this works for mouse movement because of the one pointer, but once expanded larger, the logic will be different
        this.dom.horizontal.points = [ { last: this.lastPoint, current: { x: event.pageX, y: event.pageY } } ];
        this.dom.vertical.points = [ { last: this.lastPoint, current: { x: event.pageX, y: event.pageY } } ];
        this.lastPoint = { x: event.pageX, y: event.pageY };
    }
}

customElements.define('mozak-app', MozakApp);
