# spritemanager
Super basic sprite sheet management

## Install
### NPM
```bash
npm i @thibka/spritemanager
```
```javascript
import SpriteManager from "@thibka/spritemanager"
```
### ES5
```html
<script src="SpriteManager-es5.js"></script>
```

## Usage
```html
<div id="mySpriteContainer"></div>
```

```css
#mySpriteContainer {
    width: 370px;
    height: 370px;
    background-position-x: 0;
    background-position-y: 0;
    background-repeat: no-repeat;
    background-image: url(./img/mysprite.png);
    background-size: 370px 3700px;
}
```

```javascript
var mySprite = new SpriteManager({
        container: document.getElementById('mySpriteContainer'),
        fps: 25,
        frameHeight: 370,
        height: 3700,
        loop: true,             // Optional.
        loopDelay: 500,         // Optional. Delay between each loop
        beforeLoop: function() {
            // Optional. Triggered before each iteration of a loop
        },
        complete: function() {  
            // Optional. Triggered when animation is done (wheter in a loop or not)
        }
    }); 

mySprite.play();
```






                