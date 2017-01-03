import React, {
  Component
} from 'react';

const propTypes = {};

class HelloWorld extends Component {
  componentWillMount() {
    console.log('foo');
  }

  render() {
    return (
      <div className="">
        foo
      </div>
    );
  }
}

HelloWorld.propTypes = propTypes;

export default HelloWorld;
