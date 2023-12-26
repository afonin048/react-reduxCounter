import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../redux/slices/counterSlice";


const Counter = () => {
    const dispatch = useDispatch()
    const  {value}  = useSelector((state) => state.counter)

    return (
        <div>
            <h1>Counter: {value}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Counter;