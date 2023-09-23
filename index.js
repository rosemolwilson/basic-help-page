function MyHeader() {
    return (
        <header>
            <nav className="nav">
                <img src="./images/react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MyFooter() {
    return (
        <small className="footer">© 2023 Wilson development. All rights reserved.</small>
    )
}

function MyPageContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React!</h1>
            <ol>
                <li>It's a popular library, so I'll be
                    able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                    if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <MyHeader />
            <MyPageContent />
            <MyFooter />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))