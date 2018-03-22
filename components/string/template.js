export default {
    html(direction) {
        return `${this.style()}
                <div class="line ${direction}"> </div>`;
    },

    style() {
        return `<style>
                    mozak-string > .line {
                        background-color: whitesmoke;
                    }
                    
                    mozak-string > .line.horizontal {
                        width: 100%;
                        height: 2px;
                    }
                    
                    mozak-string > .line.vertical {
                        height: 100%;
                        width: 2px;
                    }
                </style>`;
    }
}
