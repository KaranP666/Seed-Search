"use client";

import { X } from "lucide-react";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;
    if (form) form.reset(); // Fixed typo
  };

  return (
    <button type="reset" onClick={reset} className="search-btn text-white">
      <X className="size-5" />
    </button>
  );
};

export default SearchFormReset;
