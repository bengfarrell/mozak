import Template from './template.js';

export default class MozakStrings extends HTMLElement {
    /**
     * set points
     * @param pts
     */
    set points(pts) {
        if (!this.dom) {return; }

        for (let c = 0; c < pts.length; c++) {
            for (let d = 0; d < this.dom.strings.length; d++) {
                if (this.direction === 'vertical' && Math.abs(pts[c].x - this.dom.strings[d].offsetLeft) < 2) {
                    let strumDirection = Math.abs(pts[c].x - this.dom.strings[d].offsetLeft) / pts[c].x - this.dom.strings[d].offsetLeft;
                    this.dom.strings[d].strum(strumDirection, 1);
                } else if (this.direction === 'horizontal' && Math.abs(pts[c].y - this.dom.strings[d].offsetTop) < 2) {
                    let strumDirection = Math.abs(pts[c].y - this.dom.strings[d].offsetTop) / pts[c].y - this.dom.strings[d].offsetTop;
                    this.dom.strings[d].strum(strumDirection, 1);
                }
            }
        }
    }

    connectedCallback() {
        this.direction = this.getAttribute('direction');
        this.innerHTML = Template.html(this.direction);
        this.dom = Template.mapDOM(this);
    }
}

customElements.define('mozak-strings', MozakStrings);
