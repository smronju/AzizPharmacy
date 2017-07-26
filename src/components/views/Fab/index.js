import React, { Component } from 'react';
import { Fab, Button, Icon } from 'native-base';

class FabActions extends Component {
  constructor () {
    super ();

    this.state = {
      active: false
    };
  }

  render () {
    return (
      <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{ }}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => { this.setState({ active: !this.state.active }); }}
      >
        <Icon name="add" />

        <Button style={{ backgroundColor: '#34A34F' }}>
          <Icon name="logo-whatsapp" />
        </Button>

        <Button style={{ backgroundColor: '#3B5998' }}>
          <Icon name="logo-facebook" />
        </Button>

        <Button disabled style={{ backgroundColor: '#DD5144' }}>
          <Icon name="mail" />
        </Button>
      </Fab>
    );
  }
}

export default FabActions;
