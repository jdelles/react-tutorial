import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecyleA from "./components/LifecyleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import MemoComp from "./components/MemoComp";
import RefsDemo from "./components/RefsDemo";

function App() {
    return (
        <div className="App">
            <RefsDemo />
            {/* <ParentComp /> */}
            {/* <Table /> */}
            {/* <FragmentDemo /> */}
            {/* <LifecyleA /> */}
            {/* <Form /> */}
            {/* <h1 className={`error`}>Error</h1> */}
            {/* <h1 className={`styles.success`}>Success</h1> */}
            {/* <Inline /> */}
            {/* <Stylesheet primary={true} /> */}
            {/* <NameList /> */}
            {/* <UserGreeting /> */}
            {/* <ParentComponent /> */}
            {/* <EventBind /> */}
            {/* <FunctionClick /> */}
            {/* <ClassClick /> */}
            {/* <Hello /> */}
            {/* <Greet name="James" heroName="Wolverine"> */}
            {/* <p>This is children props</p> */}
            {/* </Greet> */}
            {/* <Greet name="Aiden" heroName="Cyclopse" /> */}
            {/* <button>Action</button> */}
            {/* </Greet> */}
            {/* <Greet name="Caleb" heroName="Juggernaut" /> */}
            {/* <Welcome name="James" heroName="Wolverine" /> */}
            {/* <Welcome name="Aiden" heroName="Cyclopse" /> */}
            {/* <Welcome name="Caleb" heroName="Juggernaut" /> */}
            {/* <Message />  */}
            {/* <Counter /> */}
        </div>
    );
}

export default App;
