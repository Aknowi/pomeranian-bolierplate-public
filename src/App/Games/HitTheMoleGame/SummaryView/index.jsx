import './styles.css';

export const SummaryView = ({ score, time }) => {
  return (
    <div className="htm-summary-text">
      {score > 0 &&
        `Gratulację! Złapane krety: ${score} w czasie: ${time} sek.`}
      {score === 0 &&
        `Spróbuj jeszcze raz! Nie udało Ci się złapać żadnego kreta :<`}
    </div>
  );
};
