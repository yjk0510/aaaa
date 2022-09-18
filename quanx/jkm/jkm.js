var body = $response.body
var url = $request.url

if (body) {
  var obj = JSON.parse($response.body)
  obj.data[0].time = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
  $done({ body: JSON.stringify(obj) })
} else {
  $done({})
}
