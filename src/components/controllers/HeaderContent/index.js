import { connect } from 'react-redux';
import HeaderContent from '../../views/HeaderContent';
import { toggleSearch } from '../../../actions';

const mapStateAsProps = (state) => {
  return {
    search: state.AzizPharmacy.getIn(['medicines', 'search', 'flag'])
  };
};

const mapDispatcherAsProps = (dispatch) => {
  return {
    toggleSearch () {
      dispatch(toggleSearch());
    }
  };
};

export default connect(mapStateAsProps, mapDispatcherAsProps)(HeaderContent);
