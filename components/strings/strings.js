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
                        let strum = {
                            direction: Math.abs(pts[c].current.x - pts[c].last.x) / (pts[c].current.x - pts[c].last.x),
                            power: horizontalMagnitude,
                            position: pts[c].current.x,
                            fret: Math.floor((pts[c].current.x / this.dom.strings[d].offsetHeight) * this.numFrets),
                            numFrets: this.numFrets
                        };
                        this.dom.strings[d].strum(strum);
                    } else if (this.direction === 'horizontal' && yMin <= this.dom.strings[d].offsetTop && yMax >= this.dom.strings[d].offsetTop) {
                        let strum = {
                            direction: Math.abs(pts[c].current.y - pts[c].last.y) / (pts[c].current.y - pts[c].last.y),
                            power: verticalMagnitude,
                            position: pts[c].current.y,
                            fret: Math.floor((pts[c].current.y / this.dom.strings[d].offsetWidth) * this.numFrets),
                            numFrets: this.numFrets
                        };
                        this.dom.strings[d].strum(strum);
                    }
                }
            }
        }
    }

    connectedCallback() {
        this.direction = this.getAttribute('direction');
        this.numStrings = parseInt(this.getAttribute('numstrings'));
        this.numFrets = parseInt(this.getAttribute('numfrets'));
        this.innerHTML = Template.html(this.direction, this.numStrings, this.numFrets);
        this.dom = Template.mapDOM(this);
    }
}

customElements.define('mozak-strings', MozakStrings);
