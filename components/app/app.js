import Template from './template.js';

export default class MozakApp extends HTMLElement {
    connectedCallback() {
        this.innerHTML = Template.html();
        this.dom = Template.mapDOM(this);
        document.addEventListener('mousemove', e => this.onMouseMove(e));
    }

    onMouseMove(event) {
        this.dom.horizontal.points = [ { x: event.pageX, y: event.pageY } ];
        this.dom.vertical.points = [ { x: event.pageX, y: event.pageY } ];
    }
}

customElements.define('mozak-app', MozakApp);
