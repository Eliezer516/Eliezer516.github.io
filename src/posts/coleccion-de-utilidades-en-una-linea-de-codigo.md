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
## Con Objetos

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

## Con arrays

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

## Con números

Para saber si un numero es par (un clasico)
```javascript
const isEven = num => num % 2 === 0

isEven(2) //true
isEven(3) // false
```

Redondear a un numero de decimales
```javascript
const round = (num, decimals) => +num.toFixed(decimals)

round(3.1416, 1) // 3.1
round(3.1416, 2) // 2.14
```

Generar un numero aleatorio entre dos números
```javascript
const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

randomBetween(1, 10) // 5
```

## Con strings

Genera una cadena aleatoria de longitud determinada
```javascript
const cadenaAleatoria = length => Math.random().toString(36).substring(2, 2 + length)

cadenaAleatoria(10) // 'xxdqnxvq4k'
```

Convertir cadena a ruta de URL
```javascript
const slug = str => str.normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "").toLowerCase()
  .replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')

slug("Mi Código") // "mi-codigo"
```

Reemplaza espacios que sobran
```javascript
const replaceSpaces = (str) => srt.replace(/ +/g, " ").trim()

replaceSpaces(" Hola que  tal") // "Hola que tal"
```
