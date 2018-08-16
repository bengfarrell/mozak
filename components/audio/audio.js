import MIDI from '../../libs/midijs.wrapper.js';

export default class MozakAudio extends HTMLElement {
    constructor() {
        super();
        this._ready = false;
    }

    get ready() {
        return this._ready;
    }

    playNote(params) {
        if (!this._ready) { return; }

        let note;
        if (params.noteIndex && params.numNotes) {
            note = 50 + params.numNotes;
        }

        MIDI.setVolume(0, 127);
        MIDI.noteOn(0, note, params.velocity, params.delay);
        MIDI.noteOff(0, note, params.delay + 0.75);
    }

    connectedCallback() {
        MIDI.loadPlugin({
            soundfontUrl: this.getAttribute('soundfontlocation') + '/',
            instrument: this.getAttribute('instrument'),
            onprogress: (state, progress) => this.onProgress(state, progress),
            onsuccess: () => this.onLoaded()
        });
    }

    onProgress(state, progress) {}

    onLoaded() {
        this._ready = true;
    }
}

customElements.define('mozak-audio', MozakAudio);
