var app = require('vbridge');
var h = app.h;
var state = app.state({
  title: "Twitter Images",
  img: "/test-img.jpg"
})

var io = require('socket.io-client')(window.location.href);

io.on('img', function(imgUrl) {
  console.log(imgUrl);
  state.set('img', imgUrl);
});

io.on('title', function(title) {
  state.set('title', title);
});

// html2hyperscript.herokuapp.com
app(document.body, state, function render(state) {
  return h('div', [
    h('h1', state.get('title')),
    h('img.full', { src: state.get('img') } )
  ]);
});

