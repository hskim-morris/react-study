
function Title(props) {

    console.log('props', props, props.title);

    return (
        <>
            <header>
                <h1>{props.title}</h1>
            </header>
        </>
    );
}

export default Title;