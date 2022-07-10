import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import { useSelector, useDispatch } from 'react-redux';
import { getTodosList } from '../store/todoNew/selectors';
import { removeTodoNew } from '../store/todoNew/actionsNew';

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(getTodosList);

    const onItemRemove = (id) => {
        dispatch(removeTodoNew({ id }))
    };
    
    return (
        <ListGroup>
            {todos.map(todo => (
                <ListGroup.Item key={todo.id}>
                    <div className='d-flex'>
                        <div className='w-100'>{todo.content}</div>
                        <Button
                            className='ml-auto'
                            variant="danger"
                            onClick={()=>onItemRemove(todo.id)}
                        >
                            Remove
                        </Button>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
};

export default TodoList;