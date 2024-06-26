import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
  errors: string[];
}

export default function InputWarning({ isVisible, errors, ...props }: Props) {
  return (
    <div aria-live="polite" aria-atomic="true" {...props}>
      {isVisible &&
        errors.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
    </div>
  );
}
