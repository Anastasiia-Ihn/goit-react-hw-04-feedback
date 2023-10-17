import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setOption = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  const updateFeedback = option => {
    setOption[option](prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const procent = Math.round(parseFloat(good * 100) / countTotalFeedback());

    return `${procent} %`;
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={setOption}
          onLeaveFeedback={updateFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    </>
  );
}
