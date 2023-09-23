const image = <img src="./images/react-logo.png" width="80px"></img>

const pageContent = (
    <div>
        {image}
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100l starts on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)
ReactDOM.render(pageContent, document.getElementById("root"));