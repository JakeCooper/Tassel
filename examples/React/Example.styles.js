import Tassel from 'tassel';

const $primary = 'papayawhip';
const $accent = 'palevioletred';

export default Tassel({
    text: {
        fontSize: '1.5em',
        textAlign: 'center',
        color: $accent
    },
    container: {
        padding: '4em',
        background: $primary
    }
});
