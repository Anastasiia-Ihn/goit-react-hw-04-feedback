import { BtnOptions } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arrOptions = Object.entries(options);
  return arrOptions.map(option => {
    return (
      // <BtnOptions key={option[0]} onClick={onLeaveFeedback}>
      //   {option[0]}
      // </BtnOptions>
      <BtnOptions
        key={option[0]}
        onClick={evt => {
          onLeaveFeedback(evt.target.textContent);
        }}
      >
        {option[0]}
      </BtnOptions>
    );
  });
};
