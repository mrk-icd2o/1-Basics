# Lesson 1 - Basics

The programming language we'll be using is **p5.js**, which is a Javascript library. It will allow us to easily draw shapes and add movement and interactivity to our programs.

Below is an example of a basic program:

```javascript
/*
   Description: Basics of P5.js
   Author: Mr. Kowalczewski
   Date of last edit: February 19, 2026
*/

function setup() {
  createCanvas(1000, 600);
  background(200);

}

function draw() {

}
```

## Default Code

When you are given a lab/assignment, three things will be included:

- Header
- `setup()` function
- `draw()` function

### Header

Think of this as a title page, and make sure to keep it updated:

```javascript
/*
   Description: Basics of P5.js
   Author: Mr. Kowalczewski
   Date of last edit: February 16, 2026
*/
```

- `/*` and `*/` are used to enclose **comments**, which are not read as code. More about comments later.
- Description would be the title or purpose of your program
- Author (you)
- Date of the last time you edit the program — last edit - the last time you edit the program

### setup()

We will discuss later in the course what functions are. The `setup()` function specifically runs **one time only** when you run your program, and is used to set up a few properties. In the above example, this includes:

- `createCanvas(width, height)`: specifies the desired width and height (in pixels) of your program when it's running.
- `background(255)`: sets the background colour. Providing a single number is greyscale - 0 (black) to 255 (white), you can also use three values (red, green, blue) to make different colours.

Note that the code is indented, and between a set of curly braces `{ }` - this will be the case for all functions we work with. There is also a semicolon `;` at the end of each line of code. This is not strictly required in Javascript but highly recommended.

### draw()

This is where we will be spending the majority of our time. The `draw()` function will allow us to draw different shapes and add logic (later) to our programs. Some important notes about this function:

- This function runs continuously, approximately 60 times per second.
- It uses a coordinate system (x, y) to place shapes, however this is different than Math class. `(0, 0)` is the top left corner of the window.

## Basic Shapes

When we draw shapes in p5.js, the origin `(0,0)` is in the *top left corner*.

The following are some basic shapes that we'll practice drawing today:

- `rect(x, y, width, height)`: places a rectangle at position `(x, y)` (top left corner) with width and height for sizing.
- `ellipse(x, y, width, height)`: same idea, but places an ellipse (oval) with centre (x,y).
- `line(x1, y1, x2, y2)`: places a line between the points `(x1, y1)` and `(x2, y2)`.

## Comments

Including comments in your code is a good way to explain to others (such as your teacher reading your code) what each part of your code is doing. It may even help you remember things when working on larger assignments. There are two methods for writing comments:

```javascript
// typing two forward slashes tells the code editor that
// what you're typing is not code, but a comment on a single line.

/*
You can also write multi-line comments similar to how
the header is written.
Anything in between the symbols is seen as a comment
*/
```

You do not need comments for each line of code you write. But consider grouping your program into blocks of related code, with a comment for each block.

## More Shapes

```javascript
// draws a rectangle with top left corner (x, y)
rect(x, y, width, height);

// draws an oval with centre (x, y)
ellipse(x, y, width, height);

// draws a circle with centre (x, y)
circle(x, y, radius);

// draws a line between the points (x1, y1) and (x2, y2)
line(x1, y1, x2, y2);

// draws a triangle with three points: (x1, y1), (x2, y2) and (x3, y3)
triangle(x1, y1, x2, y2, x3, y3);

// draws a quadrilateral with four points
// be careful about how you order these points!
quad(x1, y1, x2, y2, x3, y3, x4, y4);
```

## Colour and Other Properties

We saw how to use colour (greyscale or RGB) with the background - we can do the same with shapes as well.

```javascript
// fills the following shapes with the specified colour
fill(R, G, B); // Red, Green and Blue values (0 to 255)
fill(greyscale); // black (0) to white (255)

// changes the stroke (outline) colour
stroke(R, G, B); // Red, Green and Blue values (0 to 255)
stroke(greyscale); // black (0) to white (255)

// other properties

// changes the thickness of the stroke (outline) - use integers
strokeWeight(thickness);
// guess what these do
noFill();
noStroke();
```

**IMPORTANT NOTE:** when applying any of the above fill or stroke properties, they apply to all shapes below. Think of it as grabbing a red marker, THEN drawing a circle - not the other way around.

This can also get a little tricky, as the draw function loops around!

## Important Reminders

- If you are changing properties such as `stroke()`, `fill()` etc - make those changes before drawing the wanted shapes.
- Those changes apply to all following shapes - imagine that you're holding a coloured marker, all shapes you draw will be that colour until you pick up a new one.
- Because the `draw()` function loops around, the last used `stroke()` / `fill()` etc applies to any shapes until you change them again.
