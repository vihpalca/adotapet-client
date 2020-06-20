import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, createTypedHooks } from "easy-peasy";
import model, { StoreModel } from "./src/domains/index";

const { useStoreActions, useStoreState, useStoreDispatch } = createTypedHooks<
  StoreModel
>();

export {
  useStoreActions as useActions,
  useStoreDispatch as useDispatch,
  useStoreState as useStore
};

//@ts-ignore
const store = createStore<StoreModel>(model, {
  //@ts-ignore
  compose: composeWithDevTools({ realtime: true, trace: true })
});

if (process.env.NODE_ENV === "development") {
  //@ts-ignore
  if (module.hot) {
    //@ts-ignore
    module.hot.accept("./models", () => {
      store.reconfigure(model);
    });
  }
}

export default store;
