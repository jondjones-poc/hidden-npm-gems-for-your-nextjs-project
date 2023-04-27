import { useCustomStore } from '../utils/myStore';

function Zustand() {

  const { amount, updateAmount  } = useCustomStore();


  return (
    <>
      Amount: {amount}
      <button onClick={ () => updateAmount(10) } >Click Me</button>
    </>
  )
}

export default Zustand;