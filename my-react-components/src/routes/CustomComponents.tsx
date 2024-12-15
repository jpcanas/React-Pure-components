import { useEffect, useState } from "react";
import KanbanBoard from "../components/kanbanBoard/KanbanBoard";
import PasswordChecker from "../components/PasswordChecker";
import { getItem, setItem } from "../utils/localStorage";
import { usePersistedState } from "../hooks/usePersistedState";

export default function CustomComponents(){
    const [count, setCount] = usePersistedState('count', 0);

    return(
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-slate-500 mt-8 space-y-4">Custom Components</h1>
            <h3 className="text-2xl text-blue-700 mt-3">KANBAN BOARD</h3>
            <KanbanBoard/>

            <div className="flex gap-4">
                <PasswordChecker/>
                <div className="flex flex-col gap-2 mt-8">
                    <h2 className="text-2xl text-slate-600">Using local storage</h2>
                    <h3 className="text-4xl font-semibold text-center">{count}</h3>
                    <button onClick={() => setCount(count + 1)} className="text-blue-700">Increment</button>
                    <p className="text-sm text-slate-400">After increment, refresh the page the the data will be stored to local storage</p>
                </div>
                
            </div>
        </div>
    )
} 