import { Container, FeedbackButton } from './feedback.styled';

export const Buttons = ({ options, onClick }) => {
  return (
    <Container>
      {options.map(button => {
        return (
          <FeedbackButton
            onClick={() => {
              onClick(button);
            }}
          >
            {button}
          </FeedbackButton>
        );
      })}
    </Container>
  );
};
