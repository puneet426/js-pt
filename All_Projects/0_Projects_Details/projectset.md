# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution code

```

console.log("Puneet")

```
## Project 1
``` java script
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='grey'){
            body.style.background = e.target.id;
        }
        if(e.target.id==='white'){
            body.style.background = e.target.id;
        }
        if(e.target.id==='blue'){
            body.style.background = e.target.id;
        }
        if(e.target.id==='yellow'){
            body.style.background = e.target.id;
        }
        if(e.target.id==='green'){
            body.style.background = 'rgb(24, 252, 24)';
        }
    })
})
```
## Project 3

```javascript
const clock = document.getElementById('clock')
// document.querySelector('#clock')



setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
},1000)
```
