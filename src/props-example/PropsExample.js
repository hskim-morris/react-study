import React from "react";
import { useState } from "react";

function Header(props) {
    console.log('props', props, props.title);
    return (<header>
        <h1>
            <a href="/" onClick={event=> {
                    event.preventDefault();
                    props.onChangeMode();
                }}>{props.title}</a>
        </h1>
    </header>);
}

function Nav(props) {
    const list = [];
    for (let i = 0; i < props.topics.length; i++) {
        const element = props.topics[i];
        list.push(
            <li key={element.id}>
                <a id={element.id} href={'/read/' + element.id} onClick={event=> {
                    event.preventDefault();
                    props.onChangeMode(Number(event.target.id));
                }}>{element.title}</a>
            </li>
        );
    }
    return (<nav>
        <ol>{list}</ol>
    </nav>);
}

function Aticle(props) {

    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}

function PropsExample() {

    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);
    console.log('mode', mode);
    console.log('id', id);

    const topics = [
        { id: 1, title: 'react-04-01', body: 'html ...' },
        { id: 2, title: 'react-04-02', body: 'css ...' },
        { id: 3, title: 'react-04-03', body: 'js ...' },
    ];

    let content = null;

    if (mode === 'WELCOME') {
        content = <Aticle title="제목 테스트" body="바디 테스트" />
    } else if (mode === 'READ') {
        let title, body = null;
        for (let i = 0; i < topics.length; i++) {
            if( topics[i].id === id ) {
                title = topics[i].title;
                body = topics[i].body;
            }
            
        }
        content = <Aticle title={title} body={body} />
    }

    return (
        <>
            <Header title="TEST 할까" onChangeMode={() => { 
                setMode('WELCOME');
            }} />
            <Nav topics={topics} onChangeMode={(_id) => {
                setMode('READ');
                setId(_id);
            }} />
            {content}
        </>
    );
}

export default PropsExample;