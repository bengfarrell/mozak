import MozakStrings from '../strings/strings.js';

export default {
    html() {
        return `${this.style()}
                <mozak-strings direction="horizontal"></mozak-strings>
                <mozak-strings direction="vertical"></mozak-strings>`;
    },

    style() {
        return `<style>
                </style>`;
    },

    mapDOM(scope) {
        return {
            horizontal: scope.querySelector('mozak-strings[direction="horizontal"]'),
            vertical: scope.querySelector('mozak-strings[direction="vertical"]')
        };
    }
}
