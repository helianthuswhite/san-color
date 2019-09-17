import {Component} from 'san';
import './saturation.less';

export default class extends Component {
    static template = /* html */`
        <div class="san-color-saturation" style="{{mainStyle}}" on-mousedown="onMouseDown">
            <div class="san-color-saturation-white"></div>
            <div class="san-color-saturation-black"></div>
            <div class="san-color-saturation-pointer" style="{{pointerStyle}}"></div>
        </div>
    `;

    static computed = {
        mainStyle() {
            const hsv = this.data.get('color.hsv');
            return {
                background: `hsl(${hsv.h}, 100%, 50%)`
            };
        },
        pointerStyle() {
            const hsv = this.data.get('color.hsv');
            return {
                top: 98 - hsv.v * 100 + '%',
                left: hsv.s * 100 - 2 + '%'
            };
        }
    }

    eventHandler = e => this.onChange(e);

    clearHanlder = e => this.onMouseUp(e);

    initData() {
        return {
            color: {}
        };
    }

    onChange(e) {
        const {pageX, pageY} = e;
        const {clientWidth, clientHeight} = this.el;
        const xOffset = this.el.getBoundingClientRect().left + window.pageXOffset;
        const yOffset = this.el.getBoundingClientRect().top + window.pageYOffset;
        const left = (pageX - xOffset < 0 && 0)
            || (pageX - xOffset > clientWidth && clientWidth)
            || pageX-xOffset;
        const top = (pageY - yOffset < 0 && 0)
            || (pageY - yOffset > clientHeight && clientHeight)
            || pageY - yOffset;
        const saturation = left / clientWidth;
        const bright = 1 - top / clientHeight;
        const hsv = this.data.get('color.hsv');

        this.fire('change', {
            h: hsv.h,
            s: saturation,
            v: bright,
            a: hsv.a
        });
    }

    onMouseDown() {
        window.addEventListener('mousemove', this.eventHandler);
        window.addEventListener('mouseup', this.eventHandler);
        window.addEventListener('mouseup', this.clearHanlder);
    }

    onMouseUp() {
        window.removeEventListener('mousemove', this.eventHandler);
        window.removeEventListener('mouseup', this.eventHandler);
        window.removeEventListener('mouseup', this.clearHanlder);
    }

}
