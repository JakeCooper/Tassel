<p align="center"><a href="#" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://i.imgur.com/WztPF0R.png"
                                                                             alt="Tassel">
</a></p>

<br>
<p align="center">
    <a href="https://unpkg.com/tassel@latest/src/tassel.js"><img
            src="http://img.badgesize.io/https://unpkg.com/tassel@latest/src/tassel.min.js?compression=gzip&style=flat-square&colorB=51C838"
            alt="Gzip Size"></a>
    <a href="https://www.npmjs.com/package/tassel"><img src="https://img.shields.io/npm/v/tassel.svg?style=flat-square&colorB=51C838"
                                                       alt="NPM Version"></a>
    <a href="https://github.com/iamkun/dayjs/blob/master/LICENSE"><img
            src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="License"></a>
    <br>
</p>


Tassel is an ultra-lightweight CSS-In-JS library inspired by cssmodules. Write styles, get unique classes which describe your components. Tassel works wherever there are classes: React, Vue or even vanillaJS it doesn't matter.

- 📦 Zero dependencies
- 🔧 Zero configuration 
- 🔥 < 1KB GZIPPED. 

## Install

Through NPM:
`npm install --save tassel`

Through Yarn:
`yarn add tassel`

## Getting Started

Note: See the `examples` folder for framework specific implementations

### Write This

`Landing.styles.js`
```javascript
import Tassel from "tassel";

const $primary = "papayawhip";
const $accent = "palevioletred";

export default Tassel({
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
<p align="center">
<img src="https://i.imgur.com/O52Xcuq.png" alt="Tassel"></p>

Classnames are automatically generated in the format {componentname}_{stylename} so you'll always know where a style came from. No more hunting down styles in your IDE.

### Try it on CodeSandbox

### [React](https://codesandbox.io/s/547jpwokpk)

### [Vue](https://codesandbox.io/s/m7v2p83zm8)

# Contributing

Please open an issue and then raise a PR related to that issue. I'll try and respond within 24h.

# Liscense

Tassel is licensed under a [MIT License](https://github.com/JakeCooper/Tassel/blob/master/LISCENSE).
