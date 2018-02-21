La **curryfication** consiste à *transformer une fonction qui prends N arguments en N fonction qui prennent 1 argument*.

```js
function curry3(fun){
  return function(one){
    return function(two){
      return function (three){
        return fun(one, two, three)
      }
    }
  }
}

function abc(one, two, three) {
  return one/two/three
}


var curryC = curry3(abc)
var curryB = curryC(6)
var curryA = curryB(3)


console.log(curryA(2)) // => 1
```

Ce qu'il se passe ici en réalité c'est :
```js 
curry3(abc)(6)(3)(2) // 6/3/1 = 1
// il faut voir [curry3(abc)(6)(3)] comme le nom d'un fonction qu'on appelle avec (2) 
```

Vu que **curryA**, **curryB** et **curryC** retournent une fonction à chaque fois. On appelle ces fonctions qui sont retournées en leur passant un nombre en paramètre. **curry3** prends une fonction en paramètre, et l'applique aux 3 nombres qu'elle a reçu grâce à des fonctions *imbriquées*. Etant donnée qu'elles sont toutes dans le **scope** de **curry3**, chacune d'entre elles connaît l'argument de la fonction qui la précède (celle qui l'a retournée/appellée) . 

On dit de **curry3** qu'elle est une *fonction d'ordre supérieur* car elle englobe (retourne) une autre fonction.

## Un exemple plus simple

```js
const add = (a, b) => a + b
const addTen = n => add(10, n)

console.log(addTen(1)) // 11
console.log(addTen(10)) // 20
console.log(addTen(30)) // 40
```

Ici, la fonction **addTen** accepte un nombre **n** en argument et l'ajoute à 10. Comment ? Elle appelle la fonction **add** en la préremplissant avec 10 et en lui passant **n** comme argument. J'aurais pu écrire ça comme ça :

```js
const add = (a, b) => a + b
const addTenV2 = fn => n => fn(10, n)

console.log(addTenV2(add)(1)) // 11
console.log(addTenV2(add)(10)) // 20
console.log(addTenV2(add)(30)) // 40
```


## A quoi ça sert ?

Moi-même j'ai du mal à voir l'aspect pratique dedans(pour l'instant)...ma foi, il faut se renseigner. "Google" est notre poto :D

## Artciles à lire

>J'avais lu des choses intéressantes sur Medium...(à retrouver). Comme quoi, faire une synthèse de ce qu'on a appris et le redonner à la communauté est un bon exercice pour retenir.
