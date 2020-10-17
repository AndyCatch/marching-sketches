// From the Tutorial at https://charlieroberts.github.io/marching/playground/


// Set up our rounded box
mat = 'normal'
roundedSphere = Intersection(
  Box(.775)
  .material(mat),
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
  .material(mat),
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
  .post(h = Hue(), b = Blur(15, 3))
  .background(Vec3(0.087, 0.137, 0.560)) // blue?
  .render('high')

onframe = (t) =>
{
  object.rotate(t * 10, -1, 0, 1)
  // h.shift = sin(t / 5)
  // b.amount = sin(t * 0.25)
  // object.scale(sin(t))
}