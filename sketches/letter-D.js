sphere = Sphere().translate(0.5,0,0)
box = Box().translate(-0.75,0,0)

diff = Difference(sphere,box)

march(diff)
  .render('high')

onframe = (t) =>
{
 diff.rotate(t *20, 0, -1, 0)
}

