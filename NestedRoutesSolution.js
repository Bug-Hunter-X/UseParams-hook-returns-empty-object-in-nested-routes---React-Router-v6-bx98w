The solution involves carefully examining the route structure. The `useParams` hook relies on the parent routes matching correctly. Ensure that the parent route components are correctly defined to match the necessary URL segments.  Consider simplifying your routing hierarchy if it's overly complex. Here's how the corrected code might look.  We'll refactor the nested route structure to ensure that the parent routes match before the nested route is evaluated, allowing `useParams` to correctly access the dynamic segments:

```javascript
// NestedRoutesSolution.js
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function User() {
  let { userId } = useParams();
  return <h1>User ID: {userId}</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```

This restructuring ensures that the `/users/:userId` route is only evaluated when the URL begins with `/users/`.  This clarifies the matching process, solving the issue where `useParams` previously returned an empty object.