import React from 'react';


 class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false
    }
  }
  handleSubmitClicked() {
    this.setState({
      isDisabled: true
    });
    setTimeout(
      function() {
        this.enableComponents()
      }.bind(this),
      3000
    );
  }
  enableComponents() {
    this.setState({
      isDisabled: false
    });
  }
  render() {
    return (
      <div>
        <input type="text" disabled={this.state.isDisabled} />
        <button 
          disabled={this.state.isDisabled}
          onClick={this.handleSubmitClicked.bind(this)}
                  >
          Submit Query
        </button>
      </div>
    );
  }

}
export default SearchComponent;