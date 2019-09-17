import {Component} from 'san';
import './display.less';

export default class extends Component {
    static template = /* html */`
        <div class="san-color-display">
            <div class="san-color-display-bg" style="{{mainStyle}}"></div>
        </div>
    `;

    static computed = {
        mainStyle() {
            const rgba = this.data.get('color.rgba');
            const rgbStr = [rgba.r, rgba.g, rgba.b, rgba.a].join(',');
            return {
                background: `rgba(${rgbStr})`
            };
        }
    }

    initData() {
        return {
            color: {}
        };
    }

}
