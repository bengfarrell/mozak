export default {
    html(direction) {
        return `${this.style()}
                <div class="line ${direction}"> </div>`;
    },

    style() {
        return `<style>
                    mozak-string > .line.horizontal {
                        width: 100%;
                        height: 2px;
                        background-image: url("./assets/guitarstring-vertical.png");
                        background-repeat: repeat-x;
                    }
                    
                    mozak-string > .line.vertical {
                        height: 100%;
                        width: 2px;
                        background-image: url("./assets/guitarstring-horizontal.png");
                        background-repeat: repeat-y;
                    }
                </style>`;
    }
}
