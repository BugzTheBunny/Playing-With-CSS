a crash course about animations with CSS.

[Link](https://www.youtube.com/watch?v=jgw82b5Y2MU&list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5&index=1&ab_channel=TheNetNinja

)

# Transforms
CSS transforms allow you to move, rotate, scale, and skew elements.

`transform` (You can combine all of these things):
```
transform: translateX(20px) rotateZ(90deg) scale(1.2)
```
- `translate` moves from one position to another.
    - `translateY` - Y axis.
    - `translateX` - X axis.
    - `translate` - (x,y) axis
- `scale` stretches the item:
    - `scaleX` - stretches (scales) on the X axis
    - `scaleY` - stretches (scales) on the Y axis
    - `scale` - (x,y) scale axis
- `rotate` rotates elements, takes `deg` as input.
    - `rotateX` - rotates on the X axis.
    - `rotateY` - rotates on the Y axis.
    - `rotateZ` - rotates on the Z axis (The "good" rotation).

# Transition
Transition basically sets the transition time of a property / properties of the css, and you can also add a delay also you can specify a type of transition .

**_Example:_**

This will create a square, which on hover changes to circle, and when mouse is off, will change back to square, for of this operations will take 2 seconds each, and it will also rotate.

_Note_ - You can use `all` instead of specifieng the property you want.

```
.circle{
    height: 38px;
    width: 38px;
    padding: 2rem;
    background-color: green;
    border-radius: 0;
    transition: border-radius 2s;
}

.circle:hover{
    border-radius: 50px ;
    transform: rotateZ(360deg);
    transition: all 2s;
}
```

_Note_ - You can add a delay as a second number and make properties change in different delays, for example:
```
transition: background-color 5s, border-radius 2s 0.2s;
 ```  

transition types:

- `ease` - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
- `linear` - specifies a transition effect with the same speed from start to end
- `ease-in` - specifies a transition effect with a slow start
- `ease-out` - specifies a transition effect with a slow end
- `ease-in-out` - specifies a transition effect with a slow start and end
- `cubic-bezier(n,n,n,n)` - lets you define your own values in a cubic-bezier function

---
## Keyframes  
`@keyframes` basically allow you to create animations, from & end point.

for example, in the keyframe folder, you will find this:
```
.mario{
    position: absolute;
    top: -40px;
    left: 0%;
    animation: drive;
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}


.luigi{
    position: absolute;
    top: 100px;
    left: 0%;
    animation: drive;
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(5,2,5,5);
}

@keyframes drive{
    from{ 
        transform: translateX(-100px);
    }

    to{
        transform: translateX(3000px);
    }
}
```
We create a keyframe, `drive`, and we use transform:translateX inside to set the start point of the element, and the end point.

we declear the iterations count, which is infinit, and we declare how much time the animation should take.

`animation-timing-function:` -> this is the thing that help you to make a curv of animation speed / use one of the presets, you can create a `cubic-bezier` curv on the internet, and use it inside of this. [LINK](https://cubic-bezier.com/#.17,.67,.83,.67)

There is a shorter way to declare animations:
```
.cloud:nth-child(1){
    opacity: 0.8;
    animation: wind 80s linear infinite reverse;

}

.cloud:nth-child(2){
    height: 150px;
    top: 5rem;
    opacity: 1;
    animation: wind 65s linear infinite reverse;
}
```