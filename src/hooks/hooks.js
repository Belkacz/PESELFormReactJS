import { useState } from "react";

export function useValidator(valueOnStart, minlenght, maxlenght) {
  const [value, setValue] = useState(valueOnStart);
  const [msg, setMsg] = useState(null);
  return [
    value,
    {
      value,
      msg,
      onChange: (e) => {
        if (e.target.value.length < minlenght) {
          setMsg("za krótki");
        } else if (e.target.value.length > maxlenght) {
          setMsg("za długi");
        } else {
          setMsg(null);
        }
        setValue(e.target.value);
      },
    },
  ];
}

export function usePeselValidator(valueOnStart, minlenght, maxlenght) {
  const [value, setValue] = useState(valueOnStart);
  const [msg, setMsg] = useState(null);

  return [
    value,
    {
      value,
      msg,
      onChange: (e) => {
        console.log(isNaN(e.target.value));

        if (isNaN(e.target.value)) {
          setMsg("tylko cyfry");
        } else if (e.target.value.length < minlenght) {
          setMsg("za krótki");
        } else if (e.target.value.length > maxlenght) {
          setMsg("za długi");
        } else {
          setMsg(null);
        }
        setValue(e.target.value);
      },
    },
  ];
}
