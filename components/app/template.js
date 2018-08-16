import MozakStrings from '../strings/strings.js';
import MozakAudio from '../audio/audio.js';

export default {
    html(params) {
        return `${this.style()}
                <mozak-audio 
                    soundfontlocation="assets" 
                    instrument="acoustic_grand_piano">  
                </mozak-audio>
                <mozak-strings direction="horizontal" numstrings="${params.horizontal}" numfrets="${params.vertical}"></mozak-strings>
                <mozak-strings direction="vertical" numstrings="${params.vertical}" numfrets="${params.horizontal}"></mozak-strings>`;
    },

    style() {
        return `<style>
                </style>`;
    },

    mapDOM(scope) {
        return {
            horizontal: scope.querySelector('mozak-strings[direction="horizontal"]'),
            vertical: scope.querySelector('mozak-strings[direction="vertical"]'),
            audio: scope.querySelector('mozak-audio')
        };
    }
}
