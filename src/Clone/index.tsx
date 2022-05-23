import { useCounter } from "../hooks/CounterContext"

export default function Count() {
  const {count, setCount} = useCounter()

  return (
    <div>
      <span>Clone:</span> {count}
    </div>
  )
}