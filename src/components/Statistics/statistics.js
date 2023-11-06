import { Container } from './statistic.styled';

export const Statistics = ({ good, neutral, bad, total, prozent }) => {
  return (
    <Container>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total} </p>
      <p>Positive feedback: {prozent} %</p>
    </Container>
  );
};
