const React = require('react');

class RegistrationForm extends React.Component {
  render(){
    return (
      <form>
        <input type="text" />
        <input type="password" />
        <button type="submit" />
      </form>
    )
  }
}
module.exports = RegistrationForm;
