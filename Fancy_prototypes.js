// cdn address : https://cdn.jsdelivr.net/gh/Plawn/Fancy_prototypes/Fancy_prototypes.js


//Object prototypes

Object.prototype.forEach = function (func) { //func can take value and/or key
    Object.keys(this).forEach(key => func(this[key], key));
}

Object.prototype.map = function (func) { //func can take value and/or key
    const r = {};
    Object.keys(this).forEach(key => r[key] = func(this[key], key));
    return r;
}

Object.prototype.some = function (func) { //func can take value and/or key
    Object.keys(this).some(key => func(this[key], key));
}

//String prototypes
String.prototype.replaceAll = function(old, new_) {
    return this.replace(new RegExp(old, 'g'), new_);
};

String.prototype.forEach = function (func) {
    this.split('').forEach((e, i)=>func(e, i));
}

String.prototype.map = function (func) {
    return this.split('').map((e, i)=>func(e,i)).join('');   
}

String.prototype.some = function(func){
    this.split('').some((e, i)=>func(e,i));
}