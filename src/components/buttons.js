import { Container, FeedbackButton } from './styled/feedback.styled';

export const Buttons = ({ options, onClick }) => {
  return (
    <Container>
      {options.map(button => {
        return (
          <FeedbackButton name={button} onClick={onClick}>
            {button}
          </FeedbackButton>
        );
      })}
    </Container>
  );
};
