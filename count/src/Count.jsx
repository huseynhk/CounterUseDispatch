import React, { useReducer } from "react";

const initialValue = {
  count: 0,
  text: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "increament":
      return (state = { ...state, count: state.count + 1 });

    case "decrement":
      const newNumber = state.count - 1;
      return (state = { ...state, count: newNumber < 0 ? 0 : newNumber });

    case "increamentValue":
      return (state = { ...state, count: state.count + action.payload });

    case "decrementValue":
      const newNumber2 = state.count - action.payload;
      return (state = { ...state, count: newNumber2 < 0 ? 0 : newNumber2 });

    case "textInput":
      return (state = { ...state, text: action.payload });

    case "reset":
      return {
        count: 0,
        text: "",
      };

    default:
      break;
  }
}

const Count = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <div className="parent">
        <div className="btns">
          <button
            className="btn"
            onClick={() => dispatch({ type: "increament", payload: 1 })}
          >
            +
          </button>
          <h2>{state.count}</h2>

          <button
            className="btn"
            onClick={() => dispatch({ type: "decrement", payload: 1 })}
          >
            -
          </button>
        </div>

        <div>
          <input
            type="number"
            value={state.text}
            className="input"
            placeholder="Add Value"
            onChange={(e) =>
              dispatch({ type: "textInput", payload: Number(e.target.value)})
            }
          />
        </div>

        <div className="btns">
          <button
            className="btn"
            onClick={() =>
              dispatch({ type: "increamentValue", payload: state.text })
            }
          >
            Addition
          </button>
          <button
            className="btn"
            onClick={() =>
              dispatch({ type: "decrementValue", payload: state.text })
            }
          >
            Subtract
          </button>
        </div>
        <button
          className="btn reset"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Count;
