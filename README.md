# CSS-Maximilliam-course
This is my personal code following the course CSS - The Complete Guide (incl. Flexbox, Grid &amp; Sass)  by Maximilliam 


## Section 1 
Here max gives us a brief introduction to CSS selectors and how do they work in the specificity hierarchy.

Covers:
* Selectors
* Combinators
* Most common properties

## Section 2

In this section the instructor show the basics of how to edit css in diferent files and the most common properties.

## Section 3

Max shows us how important is to use border-box as a more intuitive box-model. There  is also some theory to explain Margin Collapsing, some text properties and the difference of block vs inline styling.

## Section 4

In section 4 the instructor gives us a introduction on why to use IDs as a more specific selector and how to use combined selectors.

## Section 5

Now that there is some basic knowledge on CSS Max actually pushes us to put into practice in the project that he uses untill the of the course.

## Section 6

Section 6 relies on positioning elements using the position property. Here the lessons explain how to use absolute, relative and fixed values and how the elements behave using them.

## Section 7

Going through the basics of image manipulation in CSS, here we check how to crop, clip, position images, add overlays and so on.

## Section 8 

Sizes and units are constantly used in css properties. Here the instructors helps us understanding the differences of px, percentages, rem and em.

## Section 9

Here max uses some basic javascript to handle button clicks and event based interactions.

## Section 10

Responsiveness is extremely important nowadays. Here the using media queries, the instructors helps moving our code to media queries and do mobile first approach.

## Section 11

Forms are a common way to gather information in web design, but there are different patterns of style for desktop and mobile. 

## Section 12

Fonts and text styles are a way to stand out content that is important, and here the instructor gives us a brief introduction of how to import fonts from google fonts and how to insert them into the project.

## Section 13

Flexbox is certainly a major help for manipulation how elements behave in mobile and desktop. It is certainly more interesting than block vs inline. Here the instructors refactors our project to use flexbox where it is interesting.

## Section 14 

Grids are a extremely powerfull technique to create fixed layouts where you have a repeating pattern in the layout. Theory and practical examples are given and later the project is also refactored where the instructors thinks it makes sense.

## Section 15

Transformations might look boring at first glance. Here Max gives us an introduction for 2d and some 3d transformations, but also giving us the insight that this property might be more used combined with other properties like transition.

## Section 16

Transition is a powerfull property, allowing us to create outstanding smooth effects instead of simple popping elements into the screen.

###Keyframes

* Define all animation steps on your own: Via from and to or % values
* ANimate as many properties as you want
* Animate different properties in each keyframe step
* Timing function interpolates trnasition between keyframes.

### Animation property

* Define which keyframe set should be played
* Set a duration and delay (if wanted)
* Define how many iterations should be played and if the animation should alternate or not
* Set the animation-fill-mode to decide whether the properties of the las keyframe should be kept
* Listen to animation events via javascript

## Section 17

CSS Variables

* --your-name: 1rem;
* Define values once, use them multiple times
* Only supported in modern browsers

Cross Browser Support

* Browser implement new features differently and with different speed
* Use vendor-prefixes to use cutting-edge features AND support olders browsers(partly)
* @supports allows you to check for feature-support before using a property
* Polyfills can enable some CSS features which wouldn't work otherwise
* Consider normalizing CSS defaults across browsers.

Naming CSS Classes

* Use kebab-case (e.g, page-title) and name classes by feature not by style (e.g, title-blue)
* Avoid class name collisions, for example by using BEM class names

Vanilla CSS vs Frameworks

* Writing all styles from scratch gives you full control but comes with more work and responsibility
* Components frameworks allow you to build web pages rapidly but with less control.
* Utility frameworks can be a good compromise.