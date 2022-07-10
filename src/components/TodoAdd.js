import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { addTodoNew } from '../store/todoNew/actionsNew';
import { getTodosList } from '../store/todoNew/selectors';

import { v4 } from 'uuid';

const TodoAdd = () => {
    const [newContent, setNewContent] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(getTodosList);

    const onSetNewContentChange = useCallback(evt => {
        setNewContent(evt.target.value);
    }, [setNewContent]);

    const onAddNewTodo = () => { 
        dispatch(addTodoNew({
            content: newContent,
            id: v4()
        }));
        setNewContent('');
    };

    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Nev Todo"
                    value={newContent}
                    onChange={onSetNewContentChange}
                />
                <Button variant="outline-secondary"
                        id="button-addon2"
                        onClick={onAddNewTodo}
                        disabled={todos.length > 4}>
                    Add
                </Button>
            </InputGroup>
        </div>
    )
};

export default TodoAdd;