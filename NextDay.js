function nextDay (date) {
  var result = new Date(date)
  result.setDate(result.getDate() + 1)
  console.log(result)
}
nextDay('1993-10-27')
