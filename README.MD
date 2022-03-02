# Going Through Getters in Classes

We want to create a constructor function to run when the class is initiated. the constructor function returns an `Object`.

```
class Rectangle{
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
```

In our case the function takes in two parameters - height and width. We then assign these two parameters to the `Object` that is returned.

```
const rectangle = new Rectangle(3,4)
console.log(rectangle) //{height:3, width:4}
```

After that we define our constructor function we defined a few `getters`

```
get area() { return this.width * this.height }
```
`getters` are functions that return a vlaue based on the value of the propertys in the `Object`.

The reason we would want to do this is because
We would want area as a property but the value of this `getter` is based off properties in the `Object`. In the case we change the height for example, we don't want to change the value of the area everytime. So we make it dynamic using `get` that gives the values of the current properties in the `Object`. In addition when calling a `getter` it is called as if it's a `property` not a `function` which is shown below.

```
const example = new Rectangle(3, 4)
example.area // 12
```

If it was a function you would call it like this.
```
const example = new Rectangle(3, 4)
example.area() // 12
```

In the case that we do change the height, the next time you call area it would be updated.

```
const rectangle = new Rectangle(3,4)
console.log(rectangle.area) // 12
rectangle.height = 4
console.log(rectangle.area) // 16
```
