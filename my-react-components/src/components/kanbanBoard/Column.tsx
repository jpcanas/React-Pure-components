import { useDroppable } from '@dnd-kit/core';
import TaskCard from './TaskCard';
import { Column as ColumnType, Task } from './types';

type ColumnProps = {
    column: ColumnType;
    tasks: Task[];
};

// fetch the actual data in this component (for specific column)
export default function Column({ column, tasks }: ColumnProps){
    const { setNodeRef } = useDroppable({
        id: column.id
    })

    return (
        <div className='flex w-80 flex-col rounded-lg bg-slate-400 p-4'>
            <h2 className='mb-4 font-semibold text-slate-700'>{column.title}</h2>
            <div ref={setNodeRef} className='flex flex-1 flex-col gap-4'>
                {tasks.map((task) => {
                    return <TaskCard key={task.id} task={task}/>
                })}
            </div>
        </div>
    )
}
