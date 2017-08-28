import React, { Component } from 'react';
import { Fab, Icon } from 'native-base';

class FabActions extends Component {
  constructor () {
    super ();

    this.state = {
      active: true
    };
  }

  render () {
    return (
      <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{}}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => { this.setState({ active: !this.state.active }); }}
      >
        <Icon name="add" onPress={() => alert('New medicine form will open here :)')} />
      </Fab>
    );
  }
}

export default FabActions;
