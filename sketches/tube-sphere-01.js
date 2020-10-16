rpt = Repeat(
    Sphere(.14),
    Vec3(0.25)
  )
  .material('normal')

march(
    int = Intersection(
      rpt,
      Sphere(1.7)
    )
  )
  .light(Light(Vec3(0), Vec3(2)))
  .render(3, true)

onframe = (t) =>
{
  int.rotate(t * 4, 1, -1, 1)
  rpt.scale(sin(t * .95))
}

Marching.useProxies = true