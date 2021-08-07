import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import TaskCards from "./components/TaskCards";
import ProgressBar from "./components/ProgressBar";
import FilterBar from "./components/FilterBar";
import AddNewTask from "./components/AddNewTask";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";

//redux
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import { FetchTask } from "./store/actions/index";

function App(props) {
  const [editText, setEditText] = useState("");
  useEffect(() => {
    const FetchData = async () => {
      const response = await Axios.get("http://localhost:3001/todos");
      const resData = await response.data;
      props.FetchTask(resData);
    };
    FetchData();
  }, [props.tasks]);

  const [newItem, setNewItem] = useState("");
  const [filter, setFilter] = useState("All");

  //Change Completed flag
  const onChangeCompletedItem = (id, value) => {
    Axios.patch("http://localhost:3001/todos/" + id, { completed: value });
  };

  // setState New Task
  const onAddItem = (event) => {
    setNewItem(event.target.value);
  };

  //Save Task by Enter
  const onEnter = (event) => {
    if (event.key === "Enter" && newItem !== "") {
      const item = {
        id: uuidv4(),
        title: newItem,
        completed: false,
      };
      Axios.post("http://localhost:3001/todos", item);
      setNewItem("");
      event.preventDefault();
    }
  };

  //delete Task
  const onDelete = async (id) => {
    Axios.delete("http://localhost:3001/todos/" + id);
  };

  //Edit Task
  const onEditItem = (value) => {
    setEditText(value);
    // Axios.patch("http://localhost:3001/todos/" + id, { title: value });
  };

  //Filter task
  const onSelect = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <ProgressBar
        progress={props.tasks.filter((item) => item.completed === true).length}
        task={props.tasks}
      ></ProgressBar>
      <FilterBar onSelect={onSelect}></FilterBar>
      <ListTask>
        {props.tasks
          .filter((item) => {
            if (filter === "Done") {
              return item.completed === true;
            } else if (filter === "Undone") {
              return item.completed === false;
            } else {
              return item;
            }
          })
          .map((item, index) => {
            return (
              <TaskCards
                key={index}
                item={item}
                onChangeCompletedItem={onChangeCompletedItem}
                onDelete={onDelete}
                onEditItem={onEditItem}
                edit={true}
                editText={editText}
              ></TaskCards>
            );
          })}
      </ListTask>
      <AddNewTask
        onAddItem={onAddItem}
        onEnter={onEnter}
        newItem={newItem}
      ></AddNewTask>
    </div>
  );
}

const mapDispatchProps = (dispatch) =>
  bindActionCreators(
    {
      FetchTask,
    },
    dispatch
  );

const mapStateToProps = (store) => ({
  tasks: store.taskState.tasks,
});

const ListTask = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  align-items: center;
`;

export default connect(mapStateToProps, mapDispatchProps)(App);
