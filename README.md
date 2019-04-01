# Tassel 🎓

Tassel is a lightweight CSS-In-JS library inspired by cssmodules. Write styles, get unique classes which describe your components. All with zero dependencies, zero configuration, and < 1KB GZIPPED.

## Install

Through NPM:
`npm install --save tassel`

Through Yarn:
`yarn add tassel`

## Getting Started
### Write This

`Landing.styles.js`
```javascript
import tassel from "tassel";

const $primary = "papayawhip";
const $accent = "palevioletred";

export default tassel({
  text: {
    fontSize: "1.5em",
    textAlign: "center",
    color: $accent
  },
  container: {
    padding: "4em",
    background: $primary
  }
});
```

`Landing.jsx`

```javascript
import React from "react";
import ReactDOM from "react-dom";

import styles from "./Landing.styles.js";

class Landing extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.text}>Hello, my style name is {styles.text}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Landing />, rootElement);
```
### Get This
![Image](https://i.imgur.com/O52Xcuq.png)

Classnames are automatically generated in the format {componentname}_{stylename} so you'll always know where a style came from. No more hunting down styles in your IDE.

### [Try it on CodeSandbox](https://codesandbox.io/s/547jpwokpk)

# Contributing

Please open an issue and then raise a PR related to that issue. I'll try and respond within 24h.

# Liscense

Tassel is licensed under a [MIT License](https://github.com/JakeCooper/Tassel/blob/master/LISCENSE).

# FAQ

## Raison D'etre (Why this exists)

Tassel is designed to be 3 things: 
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

Use JavaScript modules to structure your code how you want. All in one file? Styles in different files? Anything goes. Suffix your styles with `styles`, `mod`, `tassel`, it doesn't matter. Define variables, mixins, etc from other files and use them seemlessly just as you would regular JS variables.


`colors.styles.js`
```javascript
export const $primary = 'red';
export const $accent = 'green';
```

`Landing.styles.js`
```javascript
import { $primary, $accent } from 'colors.mod.js';
import tassel from 'tassel';

export default tassel({
    text: {
        color: $primary
    },
    subtext: {
        color: $accent
    }
});
```




## 3. Legible

When rendered, any Tassel component will has the className {componentname}__{stylename}. If you need to update the styles, you'll know exactly where they are. No more scouring the codebase; just open the component and they'll be there.

When developing, Tassel will get out of your way. There's no componentization, just classnames. Use them with your favorite libraries like `classNames`.

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
