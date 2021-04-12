import { mount } from "@vue/test-utils";
import FocusInput from "./FocusInput";

const FocusInputFactory = (options) => {
  return mount(FocusInput, {
    ...options
  });
};

describe("FocusInput with attach", () => {
  const wrapper = FocusInputFactory({
    attachTo: document.body,
  });

  it("Detects focus", async () => {
    const input = wrapper.find('.input');
    expect(wrapper.vm.focused).toBe(false);
    await input.trigger('focus');
    expect(wrapper.vm.focused).toBe(true);
  });
});

describe("FocusInput without attach", () => {
  const wrapper = FocusInputFactory();

  it("Detects focus", async () => {
    const input = wrapper.find('.input');
    expect(wrapper.vm.focused).toBe(false);
    await input.trigger('focus');
    expect(wrapper.vm.focused).toBe(true);
  });
});
