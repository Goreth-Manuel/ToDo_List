import { createBrowserRouter} from "react-router-dom";
import ToDo from "../toDo";
import ToDoViewModel from "../viewModel/ToDoViewModel";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <ToDo />
    },
    {
        path: "/todo",
        element: <ToDoViewModel />
    },
]);

export default Routes;