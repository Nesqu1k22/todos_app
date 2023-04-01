import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos}) {
return (
        
        <section className='TodoCounter-Container'>
            
            <h2 className='TodoCounter-Title'>Your Tasks</h2>

            <h3 className='TodoCounter-Subtitle'>You completed {totalTodos} of {completedTodos} tasks, great!</h3>

        </section>

        
    );

}

export { TodoCounter };