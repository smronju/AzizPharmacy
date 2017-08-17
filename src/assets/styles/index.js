import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContent: {
    flex: 0,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  searchHeader: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    backgroundColor: '#0D47A1',
    color: '#ffffff'
  },
  emptySearch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  emptySearchText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
