import React from 'react';
import { useState } from 'react';

function Header(props) {
	console.log('props', props, props.title);
	return (
		<header>
			<h1>
				<a
					href="/"
					onClick={(event) => {
						event.preventDefault();
						props.onChangeMode();
					}}
				>
					{props.title}
				</a>
			</h1>
		</header>
	);
}

function Nav(props) {
	const [editId, setEditId] = useState(null);
	const [editTitle, setEditTitle] = useState('');
	const [editBody, setEditBody] = useState('');

	const list = [];
	for (let i = 0; i < props.topics.length; i++) {
		const element = props.topics[i];
		console.log('editId', editId);
		console.log(element);
		console.log(editId === element.id);
		list.push(
			<li key={element.id}>
				{editId !== element.id ? (
					<>
						<a
							id={element.id}
							href={'/read/' + element.id}
							onClick={(event) => {
								event.preventDefault();
								props.onChangeMode(element.id);
							}}
						>
							{element.title}
						</a>

						<button
							style={{ backgroundColor: 'blueviolet' }}
							onClick={() => {
								setEditTitle(element.title);
								setEditBody(element.body);
								setEditId(element.id);
							}}
						>
							modify
						</button>
					</>
				) : (
					<>
						<input
							type="text"
							style={{ width: '100px' }}
							value={editTitle}
							onChange={(e) => setEditTitle(e.target.value)}
						></input>
						<input
							type="text"
							style={{ width: '100px' }}
							value={editBody}
							onChange={(e) => setEditBody(e.target.value)}
						></input>

						<button
							style={{ backgroundColor: 'green' }}
							onClick={() => {
								props.onClickModify(element.id, editTitle, editBody);
								setEditId(null);
							}}
						>
							confirm
						</button>
					</>
				)}
				<button
					style={{ backgroundColor: 'red' }}
					onClick={() => {
						props.onClickDelete(element.id);
					}}
				>
					delete
				</button>
			</li>
		);
	}
	return (
		<nav>
			<ol>{list}</ol>
		</nav>
	);
}

function Article(props) {
	return (
		<article>
			<h2>{props.title}</h2>
			{props.body}
			{/* <br />
			<button style={{ backgroundColor: 'blueviolet' }}>{props.id} modify</button>
			<button style={{ backgroundColor: 'red' }}>{props.id} delete</button> */}
		</article>
	);
}

function Create(props) {
	console.log('Create props', props);
	return (
		<article>
			test
			<h2>Create</h2>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					const title = event.target.title.value;
					const body = event.target.body.value;
					props.onCreate(title, body);
				}}
			>
				<br />
				<input
					type="text"
					name="title"
					placeholder="title"
				/>
				<br />
				<input
					type="textarea"
					name="body"
					placeholder="body"
				/>
				<br />
				<input
					type="submit"
					value="submit"
				/>
				<br />
				<input
					type="button"
					value="cancel"
					onClick={() => {
						console.log(props.id);
						props.cancel(props.id);
					}}
				/>
			</form>
		</article>
	);
}

function PropsExample() {
	const [mode, setMode] = useState('WELCOME');
	const [id, setId] = useState(null);
	const [topics, setTopicks] = useState([
		{ id: 1, title: 'react-04-01', body: 'html ...' },
		{ id: 2, title: 'react-04-02', body: 'css ...' },
		{ id: 3, title: 'react-04-03', body: 'js ...' }
	]);
	const [nextId, setNextId] = useState(topics.length + 1);
	console.log('mode', mode);
	console.log('id', id);

	let content = null;

	const changeTopick = (_id) => {
		console.log('changeTopick', _id);
		setId(_id);
		setMode('READ');
	};

	const deleteTopick = (_id) => {
		const newTopicks = [
			...topics.filter((topic, index, arr) => {
				console.log(topic);
				return topic.id !== _id;
			})
		];
		setTopicks(newTopicks);
		setMode('WELCOME');
		setId(undefined);
	};

	const modifyTopick = (_id, _title, _body) => {
		const newTopicks = [
			...topics.map((topic) => {
				if (topic.id === _id) {
					topic.title = _title;
					topic.body = _body;
				}
				return topic;
			})
		];

		setTopicks(newTopicks);
		setMode('READ');
		setId(_id);
	};

	if (mode === 'WELCOME') {
		content = (
			<Article
				title="제목 테스트"
				body="바디 테스트"
			/>
		);
	} else if (mode === 'READ') {
		let title,
			body = null;
		for (let i = 0; i < topics.length; i++) {
			if (topics[i].id === id) {
				title = topics[i].title;
				body = topics[i].body;
			}
		}

		console.log('READ', id);

		content = (
			<Article
				title={title}
				body={body}
			/>
		);
	} else if (mode === 'CREATE') {
		content = (
			<Create
				id={id}
				onCreate={(_title, _body) => {
					const newTopick = {
						id: nextId,
						title: _title,
						body: _body
					};

					const newTopicks = [...topics];
					newTopicks.push(newTopick);

					setTopicks(newTopicks);
					setMode('READ');
					setId(nextId);
					setNextId(nextId + 1);
				}}
				cancel={(id) => {
					console.log('cancel', id);
					if (id === undefined) {
						setMode('WELCOME');
					} else {
						setMode('READ');
						setId(id);
					}
				}}
			></Create>
		);
	}

	return (
		<>
			<Header
				title="TEST 할까"
				onChangeMode={() => {
					setMode('WELCOME');
				}}
			/>
			<Nav
				topics={topics}
				onChangeMode={changeTopick}
				onClickDelete={deleteTopick}
				onClickModify={modifyTopick}
			/>
			{content}
			<a
				href="/create"
				onClick={(event, value) => {
					event.preventDefault();
					setMode('CREATE');
				}}
			>
				Create
			</a>
		</>
	);
}

export default PropsExample;
