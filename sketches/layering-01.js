stair=ChamferDifference(
Sphere(2),
 Repeat(
    Sphere( 1 ), 5
	 ),
  3.3
)
bg = Plane(Vec3(0,1,1),0.5)
box = Box(1)
bend = Bend(stair, Vec2(5,6)).scale(1.5)
onion = Onion(bend,0.5)
half = Halve(onion, Halve.LEFT)
rpt = PolarRepeat(half, 3.0, 1)

march(
rpt
)
.background( Vec3(0,0,.001) )
.render('med')

onframe = (t) =>{
	bend.rotate(t*10,1,1,sin(t * 0.25))
	onion.rotate(t*25,1,0,1)
    rpt.rotate(t*10,-1,0,1)
}
