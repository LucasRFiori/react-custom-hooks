import { useCounter } from "../hooks/CounterContext"

export default function Count() {
  const {count, setCount} = useCounter()

  return (
    <div>
      <span>Count:</span>{count}

      <button onClick={() => setCount(count + 1)}> Counter </button>
    </div>
  )
}
