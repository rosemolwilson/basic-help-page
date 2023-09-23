function MyPage() {
    return (
        <div>
            <img src="./images/react-logo.png" width="80px" />
            <ol>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100l starts on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ol>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<MyPage />)