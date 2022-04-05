---
title: 'Algoritmo, de lo inexplicable a lo cotidiano'
metaTitle: 'What is an algorithms'
metaDesc: 'Podemos decir que un algoritmo está compuesto por unos datos de entradas, una serie de pasos lógicos que daran un resultado concreto, y son finito, es decir, que tiene que tener un final,¿por qué?,es debido a que sin el mismo, no habrá nunca un dato de salida o resultado'
socialImage: https://blog.openreplay.com/static/40ce8d92d87f5dd7d8e262b2bba53e59/727ea/img5.png
date: '2022-04-05'
tags:
  - Computer Science
---
# ¿Que son los algoritmos?

**segun wikipedia**: 
En matemáticas, lógica, ciencias de la computación y disciplinas relacionadas, un algoritmo (del latín algorithmus y este del griego arithmos, que significa «número», quizá también con influencia del nombre del matemático persa Al-Juarismi)​ es un conjunto de instrucciones o reglas definidas y no-ambiguas, ordenadas y finitas que permite, típicamente, solucionar un problema, realizar un cómputo, procesar datos y llevar a cabo otras tareas o actividades.​ Dado un estado inicial y una entrada, siguiendo los pasos sucesivos se llega a un estado final y se obtiene una solución.

**en resumen:**

podemos decir que un algoritmo está compuesto por unos datos de entradas, una serie de pasos lógicos que daran un resultado concreto, y son finito, es decir, que tiene que tener un final,¿por qué?,es debido a que sin el mismo, no habrá nunca un dato de salida o resultado

### los algoritmos son algo muy cotidiano, más de lo que piensas.

hagamos un ejercicio mental,piensa detalladamente ¿qué es lo que haces cuando despiertas por la mañana?, bueno, algunos diran.
* yo despierto.
* tiendo mi cama.
* camino hacia el baño.
* agarro mi cepillo.
* abro la pasta de diente.
* aplico la pasta de diente en el cepillo.
* cepillo mis diente

y asi podriamos seguir, bueno aunque no lo parezca, esto es un algoritmo, que nosostros usamos, sin darnos cuenta, debido a que ya lo tenemos tan automatizado que ni cuenta nos damos.

### la idea de un algoritmo, es aplicarla a un lenguaje de programación.

entonces estas misma intrucciones pueden ser aplicadas en el desarrollo de software, Usaremos javascript

***no te preocupes si no entiendes***

```javascript
// esto seria la representación en código de un humano,una versión muy simplificada
const Humano =  {
    salud: 100/100,
    nombre: 'maikol',
    hambre: 10/100,
    durmiendo: false,
    
    saludar: function (persona){
        console.log(`hola ${persona}`)
    },
    // Esto es una función, podemos decir que es una acción
    comer: function (alimento){
        // esto comprueba si el nivel de hambre es cero, entonces no comerá nada
        if( this.hambre === 0){ console.log('estoy lleno, no quiero comer')}
        // esto comprueba si el nivel de hambre es mayor que 10, y entonces comerá el alimento que le des
    	if( this.hambre > 10){ console.log(`comiendo: ${alimento}`)}
    }
}

Humano.comer('🍎') 

//'comiendo: 🍎' 


```

### implementemos un algoritmo al humano, que cuando quiera comer, pique las frutas y las coloque en un plato y luego coma

```javascript
// esto seria la representación en código de un humano,una versión muy simplificada
const Humano =  {
    salud: 100/100,
    nombre: 'maikol',
    hambre: 40,
    durmiendo: false,
    
    saludar: function (persona){
        console.log(`hola ${persona}`)
    },


    // ########## CONCENTREMONOS EN ESTA PARTE #############
    comer: function (alimento){
        // esto comprueba si el nivel de hambre es cero, entonces no comerá nada
        if( this.hambre === 0){ console.log('estoy lleno, no quiero comer')}
        // esto comprueba si el nivel de hambre es mayor que 10, y entonces comerá el alimento que le des
    	if( this.hambre > 10){ 
            // #### ESTE ES NUESTRO ALGORITMO PARA COMER ####
            console.log(`👨‍🍳 picando ${alimento}`)
            console.log(`👨‍🍳 colocando ${alimento} en un 🥗`)
            console.log(`🧖‍♂️ comiendo: ${alimento}`)
            
            }
    }
}
// puedes colocar cualquier fruta dentro de las comillas entre los parentesis.
Humano.comer('🍎') 

'👨‍🍳 picando 🍎'
'👨‍🍳 colocando 🍎 en un 🥗'
'🧖‍♂️ comiendo: 🍎'

```