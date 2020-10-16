// From the Tutorial at https://charlieroberts.github.io/marching/playground/

// Set up our rounded box
roundedSphere = Intersection(
  Box(.775)
  .material('red'),
  Sphere(1)
  .material('blue')
)

// Set up dimensions of our cross
crossRadius = .5
crossHeight = 1
dimensions = Vec2(crossRadius, crossHeight)

// Combine three cross sections using Union2
cross = Union2(
  Cylinder(dimensions)
  .material('green'),
  Cylinder(dimensions)
  .material('green')
  .rotate(270, 0, 0, 1),
  Cylinder(dimensions)
  .material('green')
  .rotate(270, 1, 0, 0)
)

// Subtract the cross geometry from the rounded box
object = Difference(roundedSphere, cross)
march(object)
  .render('high')

onframe = (t) =>
{
  object.rotate(t * 10, -1, 0, 1)
  // object.scale(sin(t))
}