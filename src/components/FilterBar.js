import styled from "styled-components";

function FilterBar(props) {
  return (
    <Container>
      <ContainerTasks>
        <Title>Tasks</Title>
        <DropDown>
          <Select onChange={props.onSelect} name="task" id="tasks">
            <option value="All">All</option>
            <option value="Done">Done</option>
            <option value="Undone">Undone</option>
          </Select>
        </DropDown>
      </ContainerTasks>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px;
`;
const ContainerTasks = styled.div`
  display: flex;
  justify-content: space-between;
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
const Select = styled.select`
  width: 119px;
  height: 29px;
  padding-right: 10px;
  padding-left: 10px;
  font-size: 13px;
  font-family: Roboto;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: #000000;
`;
const DropDown = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  color: #000000;
  font-size: 24px;
  font-family: Roboto;
`;

export default FilterBar;
