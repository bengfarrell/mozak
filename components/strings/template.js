import String from '../string/string.js';

export default {
    html(direction) {
        let result = `${this.style()}`;
        result += '<div class="spacer"></div>';
        for (let c = 0; c < 5; c++) {
            result += `<mozak-string direction="${direction}"></mozak-string>`;
        }

        return result;
    },

    style() {
        return `<style>
                    mozak-strings {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        position: absolute;
                    }
                    
                    mozak-strings > mozak-string, div.spacer {
                        flex: 1;
                    }
                    
                    mozak-strings[direction="horizontal"] {
                        flex-direction: column;
                    }
                    
                    mozak-strings[direction="horizontal"] > mozak-string {
                        width: 100%;
                    }
                    
                    mozak-strings[direction="vertical"] {
                        flex-direction: row;
                    }
                    
                    mozak-strings[direction="vertical"] > mozak-string {
                        height: 100%;
                    }
                    
                </style>`;
    },

    mapDOM(scope) {
        return { strings: scope.querySelectorAll('mozak-string') };
    }
}
