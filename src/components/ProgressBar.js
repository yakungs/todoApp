import styled from "styled-components";

function ProgressBar(props) {
  //คำนวณหาค่า Percent
  const ProgressPercent = (value) => {
    let percent = (100 * value) / props.task.length;
    return percent;
  };

  return (
    <Container>
      <Progress>
        <p>Progress</p>
        <Bar value={ProgressPercent(props.progress)} max="100"></Bar>
        <CompletedText>
          {props.task.filter((item) => item.completed === true).length}{" "}
          completed
        </CompletedText>
      </Progress>
    </Container>
  );
}

const CompletedText = styled.p`
  color: #ebb9b8;
  font-size: 16px;
  font-family: Roboto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px;
`;

const Progress = styled.div`
  background-color: #e07c7c;
  color: #ffffff;
  width: 518px;
  height: 128px;
  border-radius: 20px;
  padding: 20px;
`;
const Bar = styled.progress`
  width: 100%;
  height: 7.34px;
  border-radius: 999px;
  appearance: none;
  background-color: #ffffff;
  ::-webkit-progress-value {
    background-color: #ffffff;
    border-radius: 999px;
  }
  ::-webkit-progress-bar {
    background-color: #3b3b3b;
    border-radius: 999px;
  }
`;

export default ProgressBar;
