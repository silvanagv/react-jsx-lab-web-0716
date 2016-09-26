const React = require('react');
const FillerText = require('./FillerText');


class Webpage extends React.Component {
  render(){
    return React.createElement('div', {},[
      React.createElement('h1', {}, "The world's coolest webpage"),
      React.createElement(FillerText),
      React.createElement(FillerText)
    ])
  }
}

module.exports = Webpage;

// ReactDOM.render(
//   React.createElement('div',{}, [
//     React.createElement(Webpage)
//   ]),
//   document.getElementById('main')
// )
