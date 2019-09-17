import {Component} from 'san';
import tinycolor from 'tinycolor2';
import debounce from 'lodash.debounce';

import Saturation from './common/Saturation';
import Hue from './common/Hue';
import Alpha from './common/Alpha';
import Display from './common/Display';

import './sketch.less';

export default class extends Component {
    static template = /* html */`
        <div class="san-color-sketch">
            <div class="saturation-wrap">
                <ui-saturation color="{{color}}" on-change="onColorChange" />
            </div>
            <div class="hue-alpha-wrap">
                <div class="left-box">
                    <div class="hue-wrap">
                        <ui-hue color="{{color}}" on-change="onColorChange" />
                    </div>
                    <div class="alpha-wrap">
                        <ui-alpha color="{{color}}" on-change="onColorChange" />
                    </div>
                </div>
                <div class="right-box">
                    <ui-display color="{{color}}" />
                </div>
            </div>
            <div class="edit-wrap">
                <div s-for="item, index in editors" class="input-container">
                    <input value="{=item.value=}" on-input="onInput(index)" />
                    <span>{{item.text}}</span>
                </div>
            </div>
            <div class="default-wrap">
                <div s-for="item, index in defaultColors" class="default-color"
                    style="background:{{index !== defaultColors.length - 1 && item}}"
                    on-click="onColorChange(item)"></div>
            </div>
        </div>
    `;

    static components = {
        'ui-saturation': Saturation,
        'ui-hue': Hue,
        'ui-alpha': Alpha,
        'ui-display': Display
    };

    $debounceInput = debounce(param => this.handleInput(param), 300)

    initData() {
        return {
            defaultColor: '',
            color: {},
            defaultColors: [
                '#19233c', '#108cee', '#121a2c', '#ea2e2e',
                '#eaf6fe', '#f56464', '#fbdbdb', '#eceff8',
                '#5fb333', '#f1fdeb', '#f39000', '#999999',
                '#fff5f5', '#000000', '#ffffff', 'rgba(0, 0, 0, 0)'
            ],
            editors: []
        };
    }

    /**
     * inited color by props
     */
    inited() {
        const defaultColor = this.data.get('defaultColor');
        this.onColorChange(defaultColor);
    }

    /**
     * fire color change
     */
    attached() {
        this.watch('color', value => this.fire('change', value));
    }

    /**
     * hanle color change event
     * @param {*} defaultColor current color
     */
    onColorChange(defaultColor) {
        const tc = defaultColor ? tinycolor(defaultColor) : tinycolor.random();
        const color = {
            hsl: tc.toHsl(),
            hsv: tc.toHsv(),
            hex8: tc.toHex8String().toLocaleUpperCase(),
            hex: tc.toHexString().toUpperCase(),
            rgba: tc.toRgb(),
            alpha: tc.getAlpha()
        };
        const editors = [
            {
                text: 'Hex',
                value: color.hex
            },
            {
                text: 'R',
                value: color.rgba.r
            },
            {
                text: 'G',
                value: color.rgba.g
            },
            {
                text: 'B',
                value: color.rgba.b
            },
            {
                text: 'A',
                value: color.rgba.a
            }
        ];
        this.data.set('editors', editors);
        this.data.set('color', color);
    }


    $debounceInput = debounce(param => this.handleInput(param), 500)

    /**
     * debounce input event
     * @param {*} index which input is changed
     */
    onInput(index) {
        this.$debounceInput(index);
    }

    /**
     * handle input event
     * @param {*} index which input is changed
     */
    handleInput(index) {
        const editors = this.data.get('editors');
        if (index) {
            const rgba = {
                r: parseInt(editors[1].value, 10),
                g: parseInt(editors[2].value, 10),
                b: parseInt(editors[3].value, 10),
                a: parseInt(editors[4].value, 10)
            };
            this.onColorChange(rgba);
        }
        else {
            editors[0].value.length === 7 && this.onColorChange(editors[0].value);
        }
    }
}
