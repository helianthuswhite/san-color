import {Component} from 'san';
import './alpha.less';

export default class extends Component {
    static template = /* html */`
        <div class="san-color-alpha">
            <div class="san-color-alpha-bg" style="{{mainStyle}}" on-mousedown="onMouseDown">
                <div class="san-color-alpha-pointer" style="{{pointerStyle}}"></div>
            </div>
        </div>
    `;

    static computed = {
        mainStyle() {
            const rgba = this.data.get('color.rgba');
            const rgbStr = [rgba.r, rgba.g, rgba.b].join(',');
            return {
                background: `linear-gradient(to right, rgba(${rgbStr}, 0) 0%, rgba(${rgbStr}, 1) 100%)`
            };
        },
        pointerStyle() {
            const hsl = this.data.get('color.hsl');
            const direction = this.data.get('direction');
            return {
                left: direction < 0 && hsl.a === 1 ? 0 : hsl.a * 100 + '%',
                top: 0
            };
        }
    }

    eventHandler = e => this.onChange(e);

    clearHanlder = e => this.onMouseUp(e);

    initData() {
        return {
            color: {},
            direction: 0
        };
    }

    onChange(e) {
        const {pageX} = e;
        const {clientWidth} = this.el;
        const xOffset = this.el.getBoundingClientRect().left + window.pageXOffset;
        const left = pageX - xOffset;
        const a = (left / clientWidth) > 0 ? (left / clientWidth).toFixed(2) : 0;
        const hsl = this.data.get('color.hsl');

        this.data.set('direction', a - hsl.a);
        this.fire('change', {
            h: hsl.h,
            s: hsl.s,
            l: hsl.l,
            a
        });
    }

    onMouseDown() {
        this.el.addEventListener('mousemove', this.eventHandler);
        this.el.addEventListener('mouseup', this.eventHandler);
        this.el.addEventListener('mouseup', this.clearHanlder);
    }

    onMouseUp() {
        this.el.removeEventListener('mousemove', this.eventHandler);
        this.el.removeEventListener('mouseup', this.eventHandler);
        this.el.removeEventListener('mouseup', this.clearHanlder);
    }

}
