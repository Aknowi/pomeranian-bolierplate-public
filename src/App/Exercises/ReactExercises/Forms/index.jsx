import { useState } from 'react';
import './styles.css';

// 2. Jako initialValue uzyc obiektu ze zdefiniowanymi polami
const initialCourseTopics = {
  css: false,
  javascript: false,
  react: false,
  git: false,
};

export const Forms = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [comments, setComments] = useState('');
  const [fruit, setFruit] = useState('');
  const [optIn, setOptIn] = useState(false);
  const [course, setCourse] = useState('');
  const [duration, setDuration] = useState('6');
  const [theme, setTheme] = useState('#008080');
  // 1. Uzyc useState
  const [courseTopics, setCourseTopics] = useState(initialCourseTopics);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      comments,
      fruit,
      optIn,
      course,
      courseTopics,
      duration,
      theme,
    };
    console.log(data);
  };

  // 3. Stworzyc tablice z initialValue: ['css', 'javascript', 'react', 'git']
  const courseTopicsList = Object.keys(initialCourseTopics);

  return (
    <>
      <form onSubmit={handleOnSubmit} className="form-wrapper">
        {/* select option */}
        <label htmlFor="course-field">Choose your course:</label>
        <select
          className="forms-select"
          id="course-field"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">--Please choose an option--</option>
          <option value="frontend">Frontend course</option>
          <option value="backend">Backend course</option>
          <option value="devops">DecOps course</option>
        </select>
        {/* checkbox with many options */}
        <fieldset className="forms-multi-checkbox">
          <legend>Choose topics</legend>
          {/* 4. Przeiterowac po tej tablicy i stworzyc dla kazdej opcji
           checkbox (w returnie) */}
          {courseTopicsList.map((option) => (
            <div key={option}>
              {/* 5. Obsluzyc kazdy checkbox, dodac mu 
               jakies atrybuty (w returnie) */}
              <input
                type="checkbox"
                id={option}
                value={option}
                checked={courseTopics[option]}
                onChange={(e) =>
                  setCourseTopics({
                    ...courseTopics,
                    [option]: e.target.checked,
                  })
                }
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </fieldset>
        {/* input type: color */}
        <p>Choose your theme:</p>
        <input
          type="color"
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
        {console.log(theme)}
        <label htmlFor="theme"></label>

        {/* input type: range */}
        <label>
          Course duration: {duration} {duration <= 4 ? 'miesiące' : 'miesięcy'}
        </label>
        <input
          type="range"
          id="range"
          min={3}
          max={8}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        {/* Input type: text */}
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <p>Current value: {name || '(empty)'}</p>
        {/* Input type: email */}
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p>Current value: {email || '(empty)'}</p>
        {/* Input type: password */}
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          minlength="8"
          required
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {/* Input type: password (sprawdzenie poprawnosci) */}
        <label htmlFor="password-check">Confirm password:</label>
        <input
          id="password-check"
          type="password"
          value={passwordCheck}
          minlength="8"
          required
          name="password-check"
          onChange={(e) => setPasswordCheck(e.target.value)}
        ></input>
        <p>
          {password !== passwordCheck && 'Password is not correct, try again'}
        </p>
        {/* textarea */}
        <label htmlFor="comments">Comments</label>
        <textarea
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
        {/* radio check */}
        <fieldset>
          <legend>Co z Ciebie będzie</legend>

          <input
            type="radio"
            id="jabłko"
            name="fruit"
            value="jabłko"
            checked={fruit === 'jabłko'}
            onChange={(e) => setFruit(e.target.value)}
          ></input>
          <label htmlFro="jabłko">Jabłko</label>

          <input
            type="radio"
            id="gruszka"
            name="fruit"
            value="gruszka"
            checked={fruit === 'gruszka'}
            onChange={(e) => setFruit(e.target.value)}
          ></input>
          <label htmlFro="gruszka">Gruszka</label>
          <p>Czy...</p>

          <input
            type="radio"
            id="pietruszka"
            name="fruit"
            value="pietruszka"
            checked={fruit === 'pietruszka'}
            onChange={(e) => setFruit(e.target.value)}
          ></input>
          <label htmlFro="pietruszka">Pietruszka</label>
        </fieldset>
        <p>You choose: {fruit}</p>
        {/* checkbox */}
        <fieldset>
          <legend>Newsletter</legend>
          <input
            type="checkbox"
            id="opt-in-newsletter"
            checked={optIn}
            onChange={(e) => setOptIn(e.target.checked)}
          ></input>
          <label htmlFor="opt-in-newsletter">
            Yes, I would like to join newsletter
          </label>
        </fieldset>
        <p>You checked: {optIn}</p>
        <button>Submit</button>
      </form>
    </>
  );
};
