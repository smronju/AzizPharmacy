import { connect } from 'react-redux';
import HeaderContent from '../../views/HeaderContent';
import { toggleSearch, setSearchText, setSearchResult } from '../../../actions';

const mapStateAsProps = (state) => {
  return {
    search: state.AzizPharmacy.getIn(['medicines', 'search', 'flag'])
  };
};

const mapDispatcherAsProps = (dispatch) => {
  return {
    toggleSearch () {
      dispatch(toggleSearch());
    },
    setSearchText (text) {
      dispatch(setSearchText(text));
      dispatch(setSearchResult(text));
    }
  };
};

export default connect(mapStateAsProps, mapDispatcherAsProps)(HeaderContent);
