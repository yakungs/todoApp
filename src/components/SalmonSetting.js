import styled from "styled-components";

function SalmonSetting(props) {
  return (
    <ElliStyle onClick={props.onShow}>
      <Elli></Elli>
      <Elli></Elli>
      <Elli></Elli>
    </ElliStyle>
  );
}
const ElliStyle = styled.button`
  margin-right: 5px;
  display: flex;
  border: none;
  background: none;
  cursor: pointer;
`;

const Elli = styled.div`
  position: relative;
  width: 5px;
  height: 5px;
  margin-right: 1px;
  background-color: #9796a8;
  border-radius: 50%;
`;

export default SalmonSetting;
