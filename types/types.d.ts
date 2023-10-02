interface InputField {
  id: number
  name: string
  type: string
  defaultValue: string
  placeholder: string
  label: string
  errorLabel: string
  maxLength?: number
}

interface FormInititialState {
  name?: InititalStateItem
  email?: InititalStateItem
  phone?: InititalStateItem
  contacts?: InititalStateItem
  source?: InititalStateItem
  addresses?: InititalStateItem
}

interface FormInititalStateItem {
  value: string
  isValid: boolean
  errorLabelIsActive: boolean
}

interface FormInitialStateCheckbox {
  id: number
  value: string
  checked: boolean
}

interface ActionTest {
  type: string
  name?: string
  value?: string
  isValid?: boolean
  errorLabelIsActive?: boolean
}