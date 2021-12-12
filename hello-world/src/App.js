import logo from "./logo.svg";
import "./App.css";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

function App() {
    return (
        <div className="App">
            <UserProvider value="James">
                <ComponentC />
            </UserProvider>

            {/* <Counter>
                {(count, incrementCount) => (
                    <ClickCounterTwo
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            </Counter>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounterTwo
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            </Counter> */}
            {/* <ClickCounterTwo />
            <HoverCounterTwo />
            <User render={(isLoggedIn) => (isLoggedIn ? "James" : "Guest")} /> */}
            {/* <ClickCounter name="James" />
            <HoverCounter /> */}
            {/* <ErrorBoundary>
                <Hero heroName="Batman" />
            </ErrorBoundary>

            <ErrorBoundary>
                <Hero heroName="Superman" />
            </ErrorBoundary>

            <ErrorBoundary>
                <Hero heroName="Joker" />
            </ErrorBoundary> */}
            {/* <PortalDemo /> */}
            {/* <FRParentInput /> */}
            {/* <FocusInput /> */}
            {/* <RefsDemo /> */}
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
