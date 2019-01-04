// cdn address : https://raw.githubusercontent.com/Plawn/Fancy_prototypes/master/Fancy_prototypes.js


//Object prototypes

Object.prototype.forEach = function (func) { //func can take value and/or key
    const t = this;
    Object.keys(t).forEach(key => func(t[key], key));
}
Object.prototype.map = function (func) { //func can take value and/or key
    const t = this;
    Object.keys(t).forEach(key => t[key] = func(t[key], key));
    return t;
}

Object.prototype.some = function (func) { //func can take value and/or key
    const t = this;
    Object.keys(t).some(key => func(t[key], key));
}

//String prototypes
String.prototype.replaceAll = function(old, new_) {
    const t = this;
    return t.replace(new RegExp(old, 'g'), new_);
};

String.prototype.forEach = function (func) {
    const t = this;
    const n = t.length;
    let i;
    for (i = 0; i < n; i++) {
        func(t[i], i);
    }
}

String.prototype.map = function (func) {
    const t = this;
    let s = '';
    t.forEach((elem, index) => s += func(elem, index));
    return s;
}

String.prototype.some = function(func){
    const t = this;
    const n = t.length;
    let i;
    for (i = 0; i < n; i++) {
        if (func(t[i], i)) return;
    }
}