import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Home() {
  return (
    <div className='container mt-4'>
      <h1 className='text-center mb-4'>
        All Built-in React & React Router Hooks
      </h1>

      {/* React Hooks */}
      <h3 className='text-primary'>React Core Hooks</h3>

      <h5>1. useState</h5>
      <p>Allows you to add state to functional components.</p>
      <pre>{`const [count, setCount] = useState(0);`}</pre>
      <hr />

      <h5>2. useEffect</h5>
      <p>Performs side effects (e.g., data fetching, subscriptions).</p>
      <pre>{`useEffect(() => {
  console.log('Runs on mount or when dependencies change');
}, [dependency]);`}</pre>
      <hr />

      <h5>3. useContext</h5>
      <p>Accesses context without prop drilling.</p>
      <pre>{`const theme = useContext(ThemeContext);`}</pre>
      <hr />

      <h5>4. useRef</h5>
      <p>Creates a reference to a DOM element or mutable value.</p>
      <pre>{`const inputRef = useRef(null);`}</pre>
      <hr />

      <h5>5. useMemo</h5>
      <p>Memoizes expensive calculations.</p>
      <pre>{`const result = useMemo(() => compute(a, b), [a, b]);`}</pre>
      <hr />

      <h5>6. useCallback</h5>
      <p>Memoizes functions to avoid unnecessary re-renders.</p>
      <pre>{`const handleClick = useCallback(() => doSomething(), [dependency]);`}</pre>
      <hr />

      <h5>7. useReducer</h5>
      <p>Alternative to useState for more complex state logic.</p>
      <pre>{`const [state, dispatch] = useReducer(reducer, initialState);`}</pre>
      <hr />

      <h5>8. useLayoutEffect</h5>
      <p>Like useEffect, but fires synchronously after all DOM mutations.</p>
      <pre>{`useLayoutEffect(() => {
  // Measure DOM here
}, []);`}</pre>
      <hr />

      <h5>9. useImperativeHandle</h5>
      <p>Exposes custom ref methods to parent components.</p>
      <pre>{`useImperativeHandle(ref, () => ({
  focus: () => { ... }
}));`}</pre>
      <hr />

      <h5>10. useDebugValue</h5>
      <p>Helps display useful debug info in React DevTools for custom hooks.</p>
      <pre>{`useDebugValue(value);`}</pre>
      <hr />

      {/* React Router Hooks */}
      <h3 className='text-success mt-5'>React Router DOM Hooks</h3>

      <h5>11. useNavigate</h5>
      <p>Programmatically navigate to a different route.</p>
      <pre>{`const navigate = useNavigate();
navigate('/about');`}</pre>
      <hr />

      <h5>12. useParams</h5>
      <p>Access dynamic URL parameters.</p>
      <pre>{`const { id } = useParams();`}</pre>
      <hr />

      <h5>13. useLocation</h5>
      <p>Gives access to the current location object.</p>
      <pre>{`const location = useLocation();`}</pre>
      <hr />

      <h5>14. useSearchParams</h5>
      <p>Read and modify the query string in the URL.</p>
      <pre>{`const [searchParams, setSearchParams] = useSearchParams();`}</pre>
      <hr />

      <h5>15. useMatch</h5>
      <p>Checks if the current URL matches a given pattern.</p>
      <pre>{`const match = useMatch('/profile/:username');`}</pre>
      <hr />

      <h5>16. useOutlet</h5>
      <p>Returns the child route elements for nested routing.</p>
      <pre>{`const outlet = useOutlet();`}</pre>
      <hr />

      <h5>17. useNavigateType</h5>
      <p>Returns the type of navigation ("PUSH", "REPLACE", etc.).</p>
      <pre>{`const navType = useNavigationType();`}</pre>
      <hr />

      <h5>18. useRoutes</h5>
      <p>Programmatically define and render routes inside components.</p>
      <pre>{`const routing = useRoutes([...]);`}</pre>
      <hr />
      <h5>19. Context API</h5>
      <p>
        Provides a way to share values like state or functions between
        components without prop drilling.
      </p>
      <pre>{`// 1. Create Context
const MyContext = React.createContext();

// 2. Provide context at higher level
function App() {
  const value = "Hello from Context!";
  return (
    <MyContext.Provider value={value}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

// 3. Consume context in child
function ChildComponent() {
  const contextValue = React.useContext(MyContext);
  return <p>{contextValue}</p>;
}`}</pre>
      <hr />
    </div>
  );
}

export default Home;
