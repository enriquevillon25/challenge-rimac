import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "./useForm";

describe("Test use Form", () => {
  it("Should phone only are numbers", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.handleSetPhone({ target: { value: "Enrique" } });
    });
    expect(result.current.phone).toBe(0);
  });
  it("Should numDoc only are numbers", () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.handleNumDoc({ target: { value: "Enrique" } });
    });
    expect(result.current.numDoc).toBe(0);
  });
});
