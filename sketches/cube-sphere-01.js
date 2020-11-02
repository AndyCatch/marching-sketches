// Credit:  @daumkuchen / Nojima Kosuke
// Mod: AndyCatch

v3 = Vec3
v2 = Vec2
light = Light

repeatObj = Repeat(
  // Box(0.0)
  // .material('normal'),
  Box(v3(0.07), v3(0), Material.white),
  v3(.2)
)

cham = ChamferDifference(Sphere(1.1), repeatObj)
march(cham)
  .light(light(v3(0, 0.3, 0.3), v3(1)))
  .post(Focus(.15, .001))
  .background(v3(0))
  .fog(0.25, v3(0))
  .render(3, true)
  .camera(0, 0, 1.85)

onframe = (t) =>
{
  cham.move(
    Math.sin((Math.PI / 4) * t),
    null,
    Math.sin(t)
  )
  repeatObj.rotate(cos(((Math.PI / 10) * t)) * 85, 1, 1, 0)
  // repeatObj.scale(sin(t * 0.125))
}