export const paidTariffData: InputField[] = [
  {
    id: 1,
    name: "name",
    type: "text",
    defaultValue: "",
    placeholder: "",
    label: "Имя",
    errorLabel: "Указано некорректное имя",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    defaultValue: "",
    placeholder: "",
    label: "E-mail",
    errorLabel: "Указан некорректный e-mail",
  },
  {
    id: 3,
    name: "phone",
    type: "tel",
    maxLength: 11,
    defaultValue: "7",
    placeholder: "+7",
    label: "Телефон",
    errorLabel: "Указан некорректный телефон",
  },
];

export const initialState: FormInititialState = {
  name: { value: "", isValid: false, errorLabelIsActive: false },
  email: { value: "", isValid: false, errorLabelIsActive: false },
  phone: { value: "", isValid: false, errorLabelIsActive: false },
};

export const selections: FormInitialStateCheckbox[] = [
  { id: 1, value: "Для продаж", checked: true },
  { id: 2, value: "Для маркетинга", checked: true },
  { id: 3, value: "Для проверки контрагента", checked: false },
  { id: 4, value: "Для HR", checked: false },
];
