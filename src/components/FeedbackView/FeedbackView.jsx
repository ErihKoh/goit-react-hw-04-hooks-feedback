import React, { useState } from "react";
import PropTypes from "prop-types";
import Section from "../Section";
import FeedbackOptions from "../FeedbackOptions";
import Statistic from "../Statistics";
import Notification from "../Notification";
import s from "./FeedbackView.module.css";

export default function FeedbackView() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = (type) => {
    switch (type) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  const total = function () {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = function () {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  return (
    <div className={s.appBlock}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          labels={["good", "neutral", "bad"]}
          onLeaveFeedback={addFeedback}
        />
      </Section>
      {total() ? (
        <Section title="Statistics">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

FeedbackView.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
