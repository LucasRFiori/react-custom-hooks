import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

type Counter = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>
}

interface CounterProviderProps {
  children: JSX.Element[];
}

const Counter = createContext({} as Counter)


export default function CounterProvider({ children } : CounterProviderProps) {
  const [count, setCount] = useState(0)

  return <Counter.Provider value={{ count, setCount }}>{children}</Counter.Provider>
}

export function useCounter() {
  const {count, setCount} = useContext(Counter)
  return {count, setCount};
}


