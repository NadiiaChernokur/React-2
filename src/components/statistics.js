import { Container } from './styled/statistic.styled';

export const Statistics = ({ good, neutral, bad }) => {
  const prozent = (good / (good + neutral + bad)) * 100;
  return (
    <Container>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {good + neutral + bad} </p>
      <p>Positive feedback: {Math.round(prozent)} %</p>
    </Container>
  );
};
