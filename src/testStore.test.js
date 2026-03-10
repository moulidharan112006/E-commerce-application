import store from './store';
test('prints store state', () => {
  console.log('Store state keys:', Object.keys(store.getState()));
  console.log('cartReducer state:', store.getState().cartReducer);
});
