import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import * as helloWorldActionCreators from '../actions/helloWorld';
import HelloWorld from '../components/HelloWorld';

function mapStateToProps(state) {
  return { foo: state };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      products: bindActionCreators(helloWorldActionCreators, dispatch)
    }
  };
}

export {
  mapStateToProps,
  mapDispatchToProps
};
export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
