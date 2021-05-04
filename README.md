# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./images/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://base-apparel-page-ashen.vercel.app/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JS


### What I learned

In this project I learned to adjust IMG to fit the window, also I implemented 3 media queries. Also I basic JS knowledge with Regular expressions

```css
#hero-desktop{
        width: 45%;
        max-height: 100vh;
        position: absolute;
        left: 55%;
    }
```
```js
form.addEventListener('submit', (e)=>{

    if(!email.value.match(pattern)){
        form.classList.add('wrong');
        e.preventDefault();
    }
})

email.addEventListener('keyup', ()=>{

    if(email.value.match(pattern)){
        form.classList.remove('wrong'); 
    }else{
        form.classList.add('wrong');     
    }
})
```

## Author

- Frontend Mentor - [@aavv8931](https://www.frontendmentor.io/profile/aavv8931)
- Twitter - [@aavv89](https://www.twitter.com/aavv89)
- Facebook - [arturo.veintimilla.31](https://www.facebook.com/arturo.veintimilla.31/)

