# spritemanager
Super basic sprite sheet management

## Usage

### Simple
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
    background-image: url(./img/click-sprite.png);
    background-size: 370px 3700px;
}
```

```javascript
var mySprite = new SpriteManager({
        container: document.getElementById('mySpriteContainer'),
        fps: 25,
        frameHeight: 370,
        height: 28120,
        loop: true,             // Optional.
        loopDelay: 500,         // Optional. Delay between each loop
        complete: function() {  // Optional. Callback when animation is done
            console.log('Sprite animation is over');
        }
    }); 

mySprite.play();
```






                