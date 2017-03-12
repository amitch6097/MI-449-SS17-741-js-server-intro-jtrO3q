
var jokes = ['<h1>Knock, knock!</h1><h1>Who’s there?</h1><h1>Opportunity!</h1><h1>That is impossible. Opportunity doesn’t come knocking twice!</h1>', '<h1>Knock knock.</h1><h1>Who’s there?</h1><h1>The door.</h1>', '<h1>Knock knock.</h1><h1>Who’s there?</h1><h1>Suspense.</h1><h1>Suspense who?</h1>']

// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  var hostname = request.headers.host
  if (request.url === '/') {
    response.end('<h1>Hey! How are you doing today?</h1>')
  } else if (request.url === '/random-joke') {
    var index = Math.round(Math.random() * 2)
    response.end(jokes[index] + '<a href="http://' + hostname + '">To Home</a>')
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Alpaca</h1>' +
      '<a href="http://' + hostname + '">To Home</a>' +
      '<img src="http://i.imgur.com/Y3ibubf.jpg" alt="alpaca">'
    )
  } else {
    response.end(
      '<h1>Page Not Found 404</h1>' +
      '<a href="http://' + hostname + '">To Home</a>' +
      '<h2>The Requested URL ' + request.url + ' can not be found.  Bummer dude.')
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
