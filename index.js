function MyHeader() {
    return (
        <header>
            <nav>
                <img src="./images/react-logo.png" width="80px" />
            </nav>
        </header>
    )
}

function Page() {
    return (
        <div>
            <MyHeader />
            <h1>Reasons I'm excited to learn React!</h1>
            <ol>
                <li>It's a popular library, so I'll be
                    able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                    if I know React</li>
            </ol>
            <small>© 2023 Wilson development. All rights reserved.</small>
        </div>

    )
}

ReactDOM.render(<Page />, document.getElementById("root"))