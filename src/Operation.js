import { ACTIONS } from "./App"

export default function Operation({dispatch,operation}){

    return <button className="btn fun" onClick={()=>dispatch({type:ACTIONS.CHOOSE_OPERATION,payload:{operation}})}>
        {operation}
        </button>
}