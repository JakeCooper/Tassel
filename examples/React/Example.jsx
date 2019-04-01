import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Example.styles.js';

class Landing extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.text}>Hello, my style name is {styles.text}</div>
            </div>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Landing />, rootElement);
