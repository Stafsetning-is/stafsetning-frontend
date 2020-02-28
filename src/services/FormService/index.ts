export type FormElements =
  | "check-box"
  | "text-input"
  | "password-input"
  | "number-input"
  | "radio-button";

export interface InputComponent<T> {
  value: T;
  type: FormElements;
  onChange: (newValue: T) => void;
}
