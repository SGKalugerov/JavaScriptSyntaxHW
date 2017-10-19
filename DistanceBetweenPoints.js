function calcDistance (x1Distance, y1Distance, x2Distance, y2Distance) {
  let pointOne = {x1: x1Distance, y1: y1Distance}
  let pointTwo = {x2: x2Distance, y2: y2Distance}
  let distance = 0
  distance = Math.sqrt((Math.pow((pointTwo.x2 - pointOne.x1), 2) + Math.pow((pointTwo.y2 - pointOne.y1), 2)))
  console.log(distance)
}
calcDistance(2, 4, 5, 0)
