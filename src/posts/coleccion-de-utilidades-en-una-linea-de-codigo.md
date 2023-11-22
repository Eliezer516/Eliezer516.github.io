---
title: Colección de utilidades en una linea de código
desc: 
date: 2023-11-21
eleventyExcludeFromCollections: true

---

Encuentra el maximo de un array
```javascript
const max = arr => Math.max(...arr)
```

Encuentra el minimo de un array
```javascript
const max = arr => Math.min(...arr)
```

Verifica si un objeto está vacio
```javascript
const isEmpty = obj => Object.keys(obj).length === 0

isEmpty({}) // true
isEmpty({ name: "Miguel" }) // false
```

Recuperar el valor de un objeto pasando el path como un string
```javascript
const getValue = (path, obj) => path.split('.').reduce((a, c) => a?.[c], obj)

getValue('a.b', { a: { b: "Hello" }}) // "Hello"
```

Suma todos los valores de un array
```javascript
const sum = (arr) => arr.reduce((a, b) => a + b, 0)

sum([1, 2, 3]) // 6
```

Quita los valores repetidos de un array
```javascript
const unique = (arr) => [...new Set(arr)]

unique([1, 2, 1, 1]) // [1, 2]
```

Cuenta las veces que aparece un valor en un array
```javascript
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

countOccurrences([1, 2, 1, 1], 1) // 3
```


