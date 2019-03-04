# Grids

Grids are great when dealing with bidimensional data flow, i.e placing elements in both dimensions basically.


## Creating a Grid

* "display: grid" creates a grid here child elements are automatically placed in rows
* This default can be overwritten with grid-auto-flow (and then also grid-auto-rows or grid-auto-columns)
* Use grid-gap to add gaps between columsn and rows

## Defining the Grid Structure

* You define columns and/ or rows explicitly via grid-template-column/grid-template-rows
* Use repeat(times, size) to create multiple columns or rows with eas
* Use auto-ffill/auto-fit to derive the number of columns automatically
* Use minmax for dynamic sizing

## Placing Elements

* Position elements in the grid via grid-row and/or grid-column
* Use span X to span an element over multiple columns or rows
* Use line numbers, line names or named areas

## Aligning Elements

* Align grid items via justify-items(X-axis) and align-items(Y-axis)
* Align the entire grid content via justify-content(X-axis) amd align-content(Y-axis)