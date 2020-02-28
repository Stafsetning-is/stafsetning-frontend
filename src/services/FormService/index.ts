export type FormElements =
    | "check-box"
    | "text-input"
    | "password-input"
    | "number-input"
    | "radio-button";

export interface InputComponent {
    value: any;
    type: FormElements;
    onChange: (newValue: any) => void;
}
