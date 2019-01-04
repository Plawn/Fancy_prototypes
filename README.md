# Description

Fancy Prototypes aims to make the life of the JS dev easier by providing nice and simple prototypes for some of the base class of javascript. 

## How to use
---

Just add the script to your page :
```html
    <script src="https://cdn.jsdelivr.net/gh/Plawn/Fancy_prototypes/Fancy_prototypes.js
"></script>

```


## Prototypes provided :
---
### For the Object class :

Takes a function of one or two arguments.

Example :
```javascript
    Object.map((value, key) => console.log(value, key));
    Object.forEach((value, key) => console.log(value, key));
    Object.some((value, key) => console.log(value, key));
```

### For the String class :

Takes a function of one or two arguments.

Example :
```javascript
    String.map((value, key) => console.log(value, key));
    String.forEach((value, key) => console.log(value, key));
    String.some((value, key) => console.log(value, key));
```

Replaces all occurence of **old** by **new_** 
```javascript
    String.replaceAll(old, new_);
``` 