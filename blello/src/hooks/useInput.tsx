import React, { ChangeEvent, useCallback, useState } from "react";

const useInput = (initialInputValue: string) => {
  const [value, setValue] = useState<string>(initialInputValue);

  const onChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => setValue(e.target.value), []);

  return [value, onChangeValue, setValue] as [string, (e: ChangeEvent<HTMLInputElement>) => void, typeof setValue];
};

export default useInput;
