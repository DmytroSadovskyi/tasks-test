import AddTaskButton from "./components/AddTaskButton/AddTaskButton";
import AppBar from "./components/AppBar";
import Layout from "./components/Layout";

import TaskList from "./components/TaskList";

const App = () => {
  return (
    <Layout>
      <AppBar />
      <AddTaskButton />
      <TaskList />
    </Layout>
  );
};

export default App;
