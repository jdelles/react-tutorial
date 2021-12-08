import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
    return (
        <div className="App">
            {/* <Hello /> */}
            {/* <Greet name="James" heroName="Wolverine">
                <p>This is children props</p>
            </Greet>
            <Greet name="Aiden" heroName="Cyclopse">
                <button>Action</button>
            </Greet>
            <Greet name="Caleb" heroName="Juggernaut" />
            <Welcome name="James" heroName="Wolverine" />
            <Welcome name="Aiden" heroName="Cyclopse" />
            <Welcome name="Caleb" heroName="Juggernaut" /> */}
            {/* <Message /> */}
            <Counter />
        </div>
    );
}

export default App;
