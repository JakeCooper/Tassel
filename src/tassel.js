const camelToDash = (string) => string.replace(/([A-Z])/g, (matches) => `-${matches[0].toLowerCase()}`);

const rpop = (string, delimeter) => {
    return string.split(delimeter)[string.split(delimeter).length - 1];
};

const lpop = (string, delimeter) => {
    return string.split(delimeter)[0];
};

const throughArguments = () => {
    // Try to use argument.caller stuff
    const argPath = [ ...arguments ].find((arg) => {
        return arg.id && arg.id.includes('tassel');
    });
    const path = argPath && argPath.bundle && argPath.bundle.arguments[0];
    if (!path) {
        return;
    }
    const styleFileName = rpop(path, '/');
    const componentName = lpop(styleFileName, '.');
    return componentName;
};

const throughErrors = () => {
    // Try to use stack trace (End)
    const err = new Error();
    const stackCall = err.stack.split('\n')[4];
    const match = stackCall.match(/((\w*)\.(\w|\.)*):\d*\)/) || stackCall.match(/(\w*).\w*.js/);
    if (match.length >= 2) {
        return match[1];
    }
};

const bestEffortComponentName = () => {
    return throughArguments() || throughErrors() || Math.random().toString(36).slice(2).toUpperCase();
};

export default (styles, name) => {
    if (!document.styleSheets.length) {
        // Assure there is a sheet to write to
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(''));
        document.head.appendChild(style);
    }
    const componentName = name || bestEffortComponentName();

    const cleanStyles = {};
    Object.keys(styles).forEach((key) => {
        const currStyle = {};
        Object.keys(styles[key]).forEach((styleIdentifier) => {
            currStyle[camelToDash(styleIdentifier)] = styles[key][styleIdentifier];
        });
        let newClassname = `${componentName}_${key.charAt(0).toUpperCase() + key.slice(1)}`;
        let styleString = Object.entries(currStyle).reduce((styleString, [ k, v ]) => {
            return `${styleString}${k}:${v};`;
        }, '');
        document.styleSheets[document.styleSheets.length - 1].addRule('.' + newClassname, styleString);
        cleanStyles[key] = newClassname;
    });
    return cleanStyles;
};
