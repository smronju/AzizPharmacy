import { fromJS } from 'immutable';

export default function testAction (state, action) {
  return state.update('medicines', (item) => {
    return item.push(fromJS(action.data));
  });
}
