import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const open = () => {
    setValue(true);
  };
  const close = () => {
    setValue(false);
  };
  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };

  return [value, toggle, open, close];
};

export default useToggle;
