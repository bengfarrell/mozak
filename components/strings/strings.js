import Template from './template.js';

export default class MozakStrings extends HTMLElement {
    /**
     * set points
     * @param pts
     */
    set points(pts) {
        if (!this.dom) {return; }
        for (let c = 0; c < pts.length; c++) {
            if (pts[c].last && pts[c].current) {
                let horizontalMagnitude = Math.abs(pts[c].current.x - pts[c].last.x);
                let verticalMagnitude = Math.abs(pts[c].current.y - pts[c].last.y);

                let xMin = Math.min(pts[c].current.x, pts[c].last.x);
                let xMax = Math.max(pts[c].current.x, pts[c].last.x);
                let yMin = Math.min(pts[c].current.y, pts[c].last.y);
                let yMax = Math.max(pts[c].current.y, pts[c].last.y);

                for (let d = 0; d < this.dom.strings.length; d++) {
                    if (this.direction === 'vertical' && xMin <= this.dom.strings[d].offsetLeft && xMax >= this.dom.strings[d].offsetLeft ) {
                        let strumDirection = Math.abs(pts[c].current.x - pts[c].last.x) / (pts[c].current.x - pts[c].last.x);
                        this.dom.strings[d].strum(strumDirection, horizontalMagnitude);
                    } else if (this.direction === 'horizontal' && yMin <= this.dom.strings[d].offsetTop && yMax >= this.dom.strings[d].offsetTop) {
                        let strumDirection = Math.abs(pts[c].current.y - pts[c].last.y) / (pts[c].current.y - pts[c].last.y);
                        this.dom.strings[d].strum(strumDirection, verticalMagnitude);
                    }
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
