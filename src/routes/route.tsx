import { createBrowserRouter} from "react-router-dom";
import ToDoViewModel from "../viewModel/ToDoViewModel";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <ToDoViewModel />
    },
]);

export default Routes;