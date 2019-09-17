import {Component} from 'san';
import './hue.less';

export default class extends Component {
    static template = /* html */`
        <div class="san-color-hue" on-mousedown="onMouseDown">
            <div class="san-color-hue-pointer" style="{{pointerStyle}}">
                <div class="san-color-hue-picker"></div>
            </div>
        </div>
    `;

    static computed = {
        pointerStyle() {
            const hsl = this.data.get('color.hsl');
            const direction = this.data.get('direction');

            return {
                left: direction > 0 && hsl.h === 0 ? '100%' : hsl.h * 100 / 360 + '%',
                top: 0
            };
        }
    }

    eventHandler = e => this.onChange(e);

    clearHanlder = e => this.onMouseUp(e);

    initData() {
        return {
            color: {},
            direction: false
        };
    }

    onChange(e) {
        const {pageX, pageY} = e;
        const {clientWidth, clientHeight} = this.el;
        const xOffset = this.el.getBoundingClientRect().left + window.pageXOffset;
        const yOffset = this.el.getBoundingClientRect().top + window.pageYOffset;
        const left = pageX - xOffset;
        const top = pageY - yOffset;
        // const h = 1 - top * 360 / clientHeight;
        const h = left * 360 / clientWidth;
        const hsl = this.data.get('color.hsl');

        this.data.set('direction', h - hsl.h);
        this.fire('change', {
            h,
            s: hsl.s,
            l: hsl.l,
            a: hsl.a
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
