// Original by @khoparzi / https://gist.github.com/khoparzi/bb5c29b5e20cfde5d7a88a70c3629227
// Mod: AndyCatch

march(
    pr = PolarRepeat(
      ju = Julia(), 5, .25)
    .scale(2)
    .material(Material('phong', Vec3(.5), Vec3(1), Vec3(.3, .4, .5), 32, Vec3(.430)))
  )
  .background(Vec3(.4, .5, .5))
  .light(Light(Vec3(-2, 2, 4), Vec3(0.75), 0.5))
  .render('fractal.med')
  .camera(0, 0, 6)

onframe = t =>
{
  // ju.fold = 0.7012 + (cos(t * 0.125) * 0.5)
  ju.fold = (FFT[5] * 2)
  ju.rotate(t * 60, 1, 0, 0)
  pr.rotate(45 * t, 0, .8, .9)
  pr.distance = 0.25 + FFT[1]
}

FFT.start([200, 400, 600, 800, 1200, 4800, 8000, 12000])