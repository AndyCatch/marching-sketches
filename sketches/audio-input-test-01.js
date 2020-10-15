march(
    si = StairsIntersection(
      Sphere(2)
      .material('white'),
      repeat = Repeat(
        sphere = Sphere(.125),
        Vec3(.5)
      ),
      .125
    )
  )
  .render(4, true)

// start our FFT
FFT.start()

// animate
onframe = time =>
{
  si.rotate(time * 15)
  // our FFT object has low,mid, and high
  // properties that we can assign to elements
  // of our ray marching scene
  repeat.distance.x = FFT.low
  repeat.distance.y = FFT.mid
  repeat.distance.z = FFT.high
  sphere.radius = FFT.mid * FFT.high
}