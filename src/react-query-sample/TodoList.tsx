import React from 'react'
import { useQuery } from 'react-query';

function TodoList() {

    const { data, isLoading } = useQuery(["repo"], () =>
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
    );

    console.log('DATA', data);
    console.log('is loading', isLoading);



    return (<>
        {
            isLoading == true ? <h1>loading...</h1> : <ul>
                {
                    data && data.map((item: any) => <li>{item.title}</li>)
                }
            </ul>
        }
    </>)
}

export default TodoList