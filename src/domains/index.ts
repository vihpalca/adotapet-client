import example, { ExampleModel } from "./example/exampleModel";

export type StoreModel = {
  example: ExampleModel;
};

const model: StoreModel = {
  example,
};

export default model;
