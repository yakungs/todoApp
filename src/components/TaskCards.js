import styled from "styled-components";
import { useState } from "react";
import SalmonSetting from "./SalmonSetting";
import Axios from "axios";
function TaskCards(props) {
  const [editFlag, setEditFlag] = useState(props.edit);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(props.item.title);
  const onCompletedItem = () => {
    props.onChangeCompletedItem(props.item.id, !props.item.completed);
  };

  const onDeleteItem = () => {
    props.onDelete(props.item.id);
    setShow(!show);
  };

  //Change editflag for Edit
  const onEditFlag = () => {
    setEditFlag(!editFlag);
  };

  const onSave = () => {
    Axios.patch("http://localhost:3001/todos/" + props.item.id, {
      title: title,
    });
    props.onEditItem("");
    setEditFlag(!editFlag);
    setShow(!show);
  };

  const onEdit = (event) => {
    setTitle(event.target.value);
  };

  const onShow = () => {
    setShow(!show);
  };

  return (
    <Task>
      <Card>
        {editFlag ? (
          <CheckBox
            type="checkbox"
            checked={props.item.completed}
            onChange={onCompletedItem}
          ></CheckBox>
        ) : null}
        <Input
          value={!editFlag ? title.title : props.item.title}
          onChange={onEdit}
          disabled={editFlag}
          line={props.item.completed}
        ></Input>
      </Card>
      {editFlag ? <SalmonSetting onShow={onShow}></SalmonSetting> : null}

      {show ? (
        editFlag ? (
          <Menu>
            <MenuContent>
              <Edit type="button" onClick={onEditFlag}>
                <p style={{ color: "#2E2E2E" }}>edit</p>
              </Edit>
              <Delete type="button" onClick={onDeleteItem}>
                <p style={{ color: "#E07C7C" }}>delete</p>
              </Delete>
            </MenuContent>
          </Menu>
        ) : (
          <Save type="button" onClick={onSave}>
            save
          </Save>
        )
      ) : null}
    </Task>
  );
}

const Edit = styled.button`
  width: 100%;
  height: 50%;
  border: none;
  font-family: Roboto;
  font-size: 14px;
  background-color: #ffffff;
  border-top-right-radius: 10px 10px;
  border-top-left-radius: 10px 10px;
  cursor: pointer;
  padding-left: 22px;
  text-align: left;
`;

const Delete = styled.button`
  width: 100%;
  height: 50%;
  border: none;
  font-family: Roboto;
  font-size: 14px;
  background-color: #ffffff;
  border-bottom-right-radius: 10px 10px;
  border-bottom-left-radius: 10px 10px;
  cursor: pointer;
  text-align: left;
  padding-left: 22px;
`;

const MenuContent = styled.div`
  background-color: #ffffff;
  width: 111px;
  height: 81px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Save = styled.button`
  background-color: #585292;
  width: 64px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  color: #ffffff;
  font-size: 14px;
  font-family: Roboto;
  border: none;
  cursor: pointer;
`;

const Menu = styled.div`
  position: absolute;
  z-index: 1;
  @media (max-width: 2560px) {
    top: 35px;
    left: 470px;
  }
  @media (max-width: 1440px) {
    top: 35px;
    left: 470px;
  }
  @media (max-width: 768px) {
    top: 35px;
    left: 490px;
  }
  @media (max-width: 425px) {
    top: 35px;
    left: 310px;
  }
  @media (max-width: 375px) {
    top: 35px;
    left: 210px;
  }
`;

const Input = styled.input`
  color: #2e2e2e;
  background: #ffffff;
  border: none;
  outline: none;
  width: 100%;
  ${(props) =>
    props.line &&
    `
    text-decoration: line-through;
    color:#A9A9A9;
  `}
  font-family: Roboto;
  font-size: 14px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const CheckBox = styled.input`
  align-item: center;
  margin-right: 10px;
  background: salmon;
  border-radius: 6px;
  width: 22px;
  height: 22px;
  border-color: white;
  cursor: pointer;
`;

const Task = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  border-radius: 9999px;
  margin: 10px;
  position: relative;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  height: 46px;
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

export default TaskCards;
