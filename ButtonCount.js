class ButtonCount extends HTMLElement {
    constructor() {
        let count = 0;
        super();
        const shadowDOM = this.attachShadow({mode: 'open'});
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                button {
                    background-color: #222;
                    border-radius: 4px;
                    border-style: none;
                    box-sizing: border-box;
                    color: #fff;
                    cursor: pointer;
                    display: inline-block;
                    width: 10rem;
                    padding: 10px 10px;
                    text-align: center;
                    min-height: 25px;
                    min-width: 25px;
                    font-size: 16px;
                    font-weight: 700;
                }
            </style>
            <button>Times Clicked: <slot>0</slot></button>
        `
        shadowDOM.appendChild(template.content.cloneNode(true));
        this.addEventListener('click', () => {
            count++;
            this.innerText = count;
        });
    }
}

customElements.define('button-count', ButtonCount);