import './styles.css';

export const Settings = () => {
  const handleSizeClick = (e) => {
    const root = document.documentElement;
    if (e.target.value === 'small-size') {
      root.style.setProperty('--base-font-size', 12 + 'px');
    } else if (e.target.value === 'large-size') {
      root.style.setProperty('--base-font-size', 20 + 'px');
    } else if (e.target.value === 'medium-size') {
      root.style.setProperty('--base-font-size', 16 + 'px');
    }
    return;
  };

  return (
    <div className="settings-box">
      <a href="/dashboard" className="settings-back-link">
        &#60; Ustawienia
      </a>
      <p>
        Ustaw rozmiar tekstu zgodnie z Twoimi potrzebami oraz preferencjami.
      </p>
      <div className="settings-radio">
        <p className="settings-radio-title">Wybierz rozmiar fontu</p>
        <label for="small">
          <input
            type="radio"
            id="small"
            name="font-size"
            value="small-size"
            onClick={handleSizeClick}
          />
          mały
        </label>

        <label for="medium">
          <input
            type="radio"
            id="medium"
            name="font-size"
            value="medium-size"
            onClick={handleSizeClick}
          />
          standardowy
        </label>

        <label for="large">
          <input
            type="radio"
            id="large"
            name="font-size"
            value="large-size"
            onClick={handleSizeClick}
          />
          duży
        </label>
      </div>
    </div>
  );
};
