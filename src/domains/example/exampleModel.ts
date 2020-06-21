//@ts-nocheck
import { thunk, action, Action, Thunk, persist } from "easy-peasy";
import { get } from "lodash";

export interface ExampleModel {
  isLoading: boolean;
  count: number;

  addCount: Thunk<ProfileModel, void>;
  setLoading: Action<ProfileModel, string>;
  setCount: Action<ProfileModel, number>;
}

const Example: ExampleModel = {
  isLoading: false,
  count: 0,
  addCount: thunk(async (action: any) => {
    console.log('aqui')
    try {
      action.setLoading({ loading: true });
      action.setCount();
      action.setLoading({ loading: false });
    } catch (error) {
      if (error.response.status === 401) {
        action.setError({ message: "Erro ao carregar dados" });
      }
    }
  }),
  setLoading: action((state: {isLoading: boolean}, payload) => {
    const loading = get(payload, "loading", false);
    state.isLoading = loading;
  }),
  setCount: action((state: {count: number}, payload) => {
    const _count = get(payload, "count", 1);
    state.count += _count;
  }),
  // saveProfileName: thunk(async (action: any, payload: any) => {
  //   try {
  //     action.setLoading({ loading: true });
  //     const response = await SaveProfile(payload);
  //     action.setName(response);
  //     action.setLoading({ loading: false });
  //     history.push("/conta/meusdados");
  //   } catch (error) {
  //     if (error.response.status === 401) {
  //       action.setError({ message: "Erro ao carregar dados" });
  //     }
  //   }
  // }),
};

export default Example;