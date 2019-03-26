### Classifi

Classifi is a CSS-In-JS inspired by cssmodules.

NOTE: Classifi is actually taken on npm so I need a new name. Suggestions welcome.

`Landing.styles.js`
```javascript
import classifi from 'classifi';

@classifi
export default {
    landing: {
        color: 'green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
};
```

`Landing.jsx`

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import styles from 'Landing.styles.js';

class Landing extends React.Component {
    render() {
        return (
            <div className={styles.landing}>
                Hello World
            </div>
        );
    }
}

ReactDOM.render(<Landing />, document.getElementById("root"))

```


## Raison D'etre (Why this exists)

Classifi is designed to be 3 things: 
- Simple
- Flexible
- Legible

## 1. Simple

CSS in JS solves 1 key problem: Your stylized components are importable in one line. 

```
import Button from 'bootstrap';
import 'bootstrap/button/styles.css';
```
vs
```
import Button from 'MyButton';
```

## 2. Flexible

Use JavaScript modules to structure your code how you want. All in one file? Styles in different files? Anything goes. Suffix your styles with `styles`, `mod`, `asdf`, it doesn't matter. Story


`colors.styles.js`
```javascript
export const $primary = '#FF0000';
```

`Landing.styles.js`
```javascript
import { $primary } from 'colors.mod.js';
import classifi from 'classifi';

@classifi
export default {
    landing: {
        color: $primary
    },
};
```




## 3. Legible

When rendered, any classifi component will has the className {componentname}__{stylename}. If you need to update the styles, you'll know exactly where they are. No more scouring the codebase; just open the component and they'll be there.

When developing, classifi will get out of your way. There's no componentization, just classnames. Use them with your favorite libraries like `classNames`.

```javascript
<div className={classNames(styles.title, styles.text)}>Hello World</div>
```

## Purely Functional

Styles should be functional and you should never have to debug whether a prop is causing a style change without seeing the corresponding class in the DOM. Take the following example: 
```javascript
render() {
    const {enabled} = this.state;
    return (
        <button className={enabled ? styles.btnEnabled : styles.btnDisabled}
            Click Me
        </button>
    )
}
```

By keeping props and state out of your style building, you'll know exactly which class is causing you trouble, because you'll see "Landing_btnEnabled" or "Landing_btnDisabled" in your DOM Tree. You'll know immediately which class you have to fix.
