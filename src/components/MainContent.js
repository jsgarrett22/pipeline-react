import React from 'react';

function MainContent(props) {
    const list = props.clients.map((client) => {
        return client.name;
    });
    console.log(props.clients[0].name);
    return (
    <main className='App-content shadow'>
        {list}
    </main>
    )
}

export default MainContent;