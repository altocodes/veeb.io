export const myInfoDeletionData: InputField[] = [
  {
    id: 1,
    name: "contacts",
    type: "text",
    defaultValue: "",
    placeholder: "Каждый с новой строки",
    label: "Контакты, которые вы хотите убрать",
    errorLabel: "Указано некорректные контакты",
  },
  {
    id: 2,
    name: "source",
    type: "text",
    defaultValue: "",
    placeholder: "Укажите конкретную страниц",
    label: "Источник",
    errorLabel: "Укажите корректный адрес",
  },
  {
    id: 3,
    name: "addresses",
    type: "text",
    defaultValue: "",
    placeholder: "Мы вам напишем, чтобы подтвердить, что запрос поступил действительно от вас",
    label: "Ссылки на социальные сети",
    errorLabel: "Указаны некорректные ссылки",
  },
];

export const initialState: FormInititialState = {
  contacts: { value: "", isValid: false, errorLabelIsActive: false },
  source: { value: "", isValid: false, errorLabelIsActive: false },
  addresses: { value: "", isValid: false, errorLabelIsActive: false },
};
