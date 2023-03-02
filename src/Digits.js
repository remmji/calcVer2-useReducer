import { ACTIONS } from "./App"

export default function Digits({dispatch,digit}){

    return <button className="btn" onClick={()=>dispatch({type:ACTIONS.ADD_DIGIT,payload:{digit}})}>
        {digit}
        </button>
}