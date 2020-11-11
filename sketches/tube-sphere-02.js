mat = 'normal'
rpt = Repeat(
    TriPrism(.15),
    Vec3(0.25)
  )
  .material('noise')

int = Intersection(
  rpt,
  Sphere(1.7)
  .material(mat)
)

diff = StairsDifference(int, Sphere(1.5)
  .translate(1.5, 0, 1.5)
  .material('black')
)

march(diff)
  .background(Vec3(0.007, 0.020, 0.085)) // blue–black
  .light(
    Light(Vec3(2, 2, 3), Vec3(1)),
    Light(Vec3(-2, 2, 3), Vec3(1, 0, 0)),
    Light(Vec3(0, 0, -3), Vec3(0, 0, 1)),
  )
  .render(3, true)
  .camera(0, 0, 2)

onframe = (t) =>
{
  diff.rotate(t * 20, t * -10, t * 5)
  diff.translate(sin(t * 0.125), 0, cos(t * -0.125))
  int.rotate(t * 4, 1, -1, 1)
  rpt.scale(sin(t * .095))
}