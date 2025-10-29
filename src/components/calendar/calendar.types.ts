export interface CalendarComponentProps {
  onChange: (value: Date | null) => void
  buttonLabel?: string
  customMinDate?: Date
  customMaxDate?: Date
}