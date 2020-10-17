mat = 'normal'
rpt = Repeat(
    Sphere(.14),
    Vec3(0.25)
  )
  .material(mat)

int = Intersection(
  rpt,
  Sphere(1.7)
  .material(mat)
)

diff = StairsDifference(int, Sphere(1.5)
  .translate(1.5, 0, 1.5)
  .material('noise'))

march(diff)
  // .light(Light(Vec3(0), Vec3(2)))
  .render(3, true)

onframe = (t) =>
{
  diff.rotate(t * 20, t * -10, t * 5)
  // diff.translate(tan(t*0.25), 0, 0)
  int.rotate(t * 4, 1, -1, 1)
  rpt.scale(sin(t * .95))
}

Marching.useProxies = true