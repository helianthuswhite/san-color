# San Color

🎨 San Color Pickers for Sketch, Photoshop, Chrome & more https://helianthuswhite.github.io/san-color/

## Installation
Using npm:

    $ npm install san-color

## Usage
Use every type colorpicker as a san component.

```js
import {Component} from san;
import {Sketch} from 'san-color';

export default class extends Component {
    static template = `
        <template>
            <ui-sketch color="{=color=}" default-color="#108cee" on-change="onColorChange" />
        </template>
    `;

    initData() {
        return {
            color: {}
        };
    }

    onColorChange(color) {
        console.log(color);

        // const color = {
        //     hsl: ...
        //     hsv: ...
        //     hex8: ...
        //     hex: ...
        //     rgba: ...
        //     alpha: ...
        // };
    }
}

```

# License
MIT
