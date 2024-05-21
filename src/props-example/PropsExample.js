import React from "react";

function Header(props) {
    console.log('props', props, props.title);
    return (<header>
        <h1>
            <a href="/">{props.title}</a>
        </h1>
    </header>);
}

function Nav(props) {
    const list = [];
    for (let i = 0; i < props.topics.length; i++) {
        const element = props.topics[i];
        list.push(
            <li key={element.id}>
                <a href={'/read' + element.id}>{element.title}</a>
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
    const topics = [
        {id:1, title: 'react-04-01', body: 'html ...'},
        {id:2, title: 'react-04-02', body: 'css ...'},
        {id:3, title: 'react-04-03', body: 'js ...'},
    ];

    return (
        <>
            <Header title="TEST 할까"/>
            <Nav topics={topics}/>
            <Aticle title="제목 테스트" body="바디 테스트"/>
        </>
    );
}

export default PropsExample;