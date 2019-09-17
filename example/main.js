import {Component} from 'san';
import {Sketch} from 'san-color';

import './main.less';

const MainComponent = class extends Component {
    static template = /* html */`
        <template>
            <div class="top" style="{{topStyle}}">
                <a class="github-fork-ribbon" href="https://github.com/helianthuswhite/san-color"
                    title="Fork me on GitHub">Fork me on GitHub</a>
                <div class="container">
                    <div class="intro">
                        <h1>San Color</h1>
                        <p>A Collection of Color Pickers from Sketch, Photoshop, Chrome, Github, Twitter, Material Design & more</p>
                    </div>
                    <div class="star-button">
                        <iframe src="https://ghbtns.com/github-btn.html?user=helianthuswhite&repo=san-color&type=star&count=true&size=large"
                            scrolling="0" width="160px" height="30px" frameborder="0"></iframe>
                    </div>
                    <div class="sketch">
                        <x-sketch color="{=color=}" default-color="#108cee" />
                        <p class="component-title">Sketch</p>
                    </div>
                </div>
            </div>
            <div class="bottom"></div>
        </template>
    `;

    static components = {
        'x-sketch': Sketch
    };

    static computed = {
        topStyle() {
            const rgba = this.data.get('color.rgba') || {};
            const rgbStr = [rgba.r, rgba.g, rgba.b].join(',');
            return {
                background: `rgba(${rgbStr})`
            };
        }
    };

    initData() {
        return {
            color: {}
        };
    }

};

new MainComponent().attach(document.getElementById('main'));
