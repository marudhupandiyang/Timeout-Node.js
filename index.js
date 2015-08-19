var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Timeouter using Node.js')
})

app.listen(app.get('port'), function() {
	//infinite loop
	while(true){}
})
