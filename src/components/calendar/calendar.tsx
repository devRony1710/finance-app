import { useEffect, useRef, useState, type FC, type RefObject } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import dayjs from 'dayjs'
import { useClickOutside } from '@/hooks/use-click-outside/use-click-outside'
import type { CalendarComponentProps } from './calendar.types'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export const CalendarComponent: FC<CalendarComponentProps> = ({
  onChange,
  buttonLabel,
  customMinDate,
  customMaxDate,
  errors,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState<Value>(new Date())
  const minDate = dayjs().subtract(1, 'year').toDate()
  const maxDate = dayjs().toDate()

  const handleCalendarChange = (value: Value) => {
    setValue(value)
    setIsOpen(false)
  }

  const ref = useRef<HTMLDivElement>(null)

  useClickOutside(ref as RefObject<HTMLElement>, () => setIsOpen(false))

  useEffect(() => {
    if (value) {
      onChange(value as Date)
    }
  }, [value, onChange])

  return (
    <div ref={ref} className="flex flex-col items-center relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="border border-primary rounded-[8px] h-[36px] px-5 py-1 w-full"
      >
        {buttonLabel ?? 'Seleccionar fecha'}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 w-full z-10">
          <Calendar
            minDate={customMinDate || minDate}
            maxDate={customMaxDate || maxDate}
            onChange={handleCalendarChange}
            value={value}
            defaultView="month"
            prev2Label={null}
            next2Label={null}
            className="rounded-lg shadow-md w-full min-w-[280px] lg:min-w-[380px] max-w-[380px]"
          />
        </div>
      )}
      {errors && <span className="text-red-500">{errors}</span>}
    </div>
  )
}
