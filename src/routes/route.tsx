import { createBrowserRouter} from "react-router-dom";
import ToDo from "../toDo";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <ToDo />
    },
]);

export default Routes;