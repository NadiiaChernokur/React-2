import { Container } from './feedback.styled';

export const Buttons = ({ options, onClick }) => {
  return (
    <Container>
      {options.map(button => {
        return (
          <button name={button} onClick={onClick}>
            {button}
          </button>
        );
      })}
    </Container>
  );
};
