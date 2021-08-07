import styled from "styled-components";

function AddNewTask(props) {
  return (
    <ListTask>
      <AddTask
        type="text"
        placeholder="Add your todo..."
        onChange={props.onAddItem}
        value={props.newItem}
        onKeyPress={props.onEnter}
      ></AddTask>
    </ListTask>
  );
}

const AddTask = styled.input`
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: space-between;
  background-color: white;
  border-radius: 9999px;
  margin: 10px;
  position: relative;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  border: none;
  height: 46px;
  outline: none;
  font-family: Roboto;
  font-size: 16px;
  @media (max-width: 2560px) {
    width: 30%;
  }
  @media (max-width: 1440px) {
    width: 57%;
  }
  @media (max-width: 768px) {
    width: 78%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const ListTask = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  align-items: center;
`;

export default AddNewTask;
