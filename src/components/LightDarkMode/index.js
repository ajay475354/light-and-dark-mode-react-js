import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isButtonClicked: false}

  viewChange = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  buttonText = () => {
    const {isButtonClicked} = this.state
    return isButtonClicked ? 'Dark Mode' : 'Light Mode'
  }

  render() {
    const {isButtonClicked} = this.state
    const cardsColor = isButtonClicked
      ? 'white-card-container'
      : 'black-card-container'
    return (
      <div className="bg-container">
        <div className={cardsColor}>
          <h1 className="heading">click to change mode</h1>
          <button type="button" className="button" onClick={this.viewChange}>
            {this.buttonText()}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
