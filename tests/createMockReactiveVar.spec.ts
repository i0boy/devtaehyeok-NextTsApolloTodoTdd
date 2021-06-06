import { mockTodosVar } from "./mocks/mockTodoVar";

describe("Testing mock reactive variables", () => {
  beforeEach(() => mockTodosVar([]));

  it("should set the current value if provided", () => {
    mockTodosVar([{ id: 0, text: "First todo", done: false }]);
    expect(mockTodosVar()?.length).toEqual(1);
  });

  it("should overwrite the current value", () => {
    mockTodosVar([{ id: 0, text: "First todo", done: false }]);
    expect(mockTodosVar()?.length).toEqual(1);

    mockTodosVar([{ id: 1, text: "Second todo", done: false }]);
    expect(mockTodosVar()?.length).toEqual(1);
  });

  it("should not overwrite the current value if no value provided", () => {
    mockTodosVar([
      { id: 0, text: "First todo", done: false },
      { id: 1, text: "Second todo", done: false },
    ]);
    expect(mockTodosVar()?.length).toEqual(2);

    mockTodosVar();
    expect(mockTodosVar()?.length).toEqual(2);
  });
});
