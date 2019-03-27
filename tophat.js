const camelToDash = (string) => string.replace(/([A-Z])/g, (matches) => `-${matches[0].toLowerCase()}`);

const rpop = (string, delimeter) => {
    return string.split(delimeter)[string.split(delimeter).length - 1];
};

const lpop = (string, delimeter) => {
    return string.split(delimeter)[0];
};

export default (styles) => {
    if (!document.styleSheets.length) {
        // Assure there is a sheet to write to
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(''));
        document.head.appendChild(style);
    }
    const i = document.styleSheets.length - 1;
    const path = [ ...arguments ].find((arg) => {
        return arg.id && arg.id.includes('tophat');
    }).bundle.arguments[0];
    const styleFileName = rpop(path, '/');
    const componentName = lpop(styleFileName, '.');
    const cleanStyles = {};
    Object.keys(styles).forEach((key) => {
        const currStyle = {};
        Object.keys(styles[key]).forEach((styleIdentifier) => {
            currStyle[camelToDash(styleIdentifier)] = styles[key][styleIdentifier];
        });
        let newClassname = `${componentName}_${key}`;
        let styleString = Object.entries(currStyle).reduce((styleString, [ k, v ]) => {
            return `${styleString}${k}:${v};`;
        }, '');
        document.styleSheets[i].addRule('.' + newClassname, styleString);
        cleanStyles[key] = newClassname;
    });
    return cleanStyles;
};
