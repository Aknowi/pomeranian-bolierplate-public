import { useState } from 'react';
import './styles.css';

//  - dodać validacje hasła
//  - czy wszystko powinno mieć required

const additionList = [
  { id: 1, title: 'ustawienie środowiska', status: false },
  { id: 2, title: 'intro do GitHub', status: false },
  { id: 3, title: 'materiały dodatkowe', status: false },
];

export const OrderForm = () => {
  const [course, setCourse] = useState('');
  const [payment, setPayment] = useState('');
  const [name, setName] = useState('');
  const [nick, setNick] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [newsletter, setNewsletter] = useState('');
  const [terms, setTerms] = useState('');
  const [address, setAddress] = useState('');
  const [addition, setAddition] = useState(additionList);

  const handleOrder = (e) => {
    e.preventDefault();
    const data = {
      course,
      payment,
      addition,
      name,
      nick,
      address,
      email,
      phone,
      comment,
      account,
      password,
      newsletter,
      terms,
    };
    console.log(data);
  };

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };
    console.log('newErrors ' + newErrors);
    console.log('errors ' + errors.name);

    switch (fieldName) {
      case 'name':
        newErrors.name = value.trim() === '' ? 'Name is required' : '';
        break;
      case 'email':
        newErrors.email = !/\S+@\S+\.\S+/.test(value)
          ? 'Invalid email format'
          : '';
        break;
      case 'password':
        newErrors.password =
          value.length < 6 ? 'Password must be at least 6 characters long' : '';
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  return (
    <>
      <form className="of-wrapper" onSubmit={handleOrder}>
        {/* Order */}
        {/* <BulletIcon /> */}
        <h4 className="of-title">Zamówienie produktu</h4>
        {/* Select course */}
        <label className="of-select-title" htmlFor="choose-product">
          Wybierz produkt&#42;
        </label>
        <select
          className="of-select"
          id="choose-product"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="frontend">kurs front-end</option>
          <option value="backend">kurs back-end</option>
          <option value="devops">kurs DevOps</option>
        </select>
        {/* radio check  payment*/}
        <fieldset className="of-fieldset payment-field">
          <legend className="of-select-title">
            Wybierz formę płatności&#42;
          </legend>
          <div>
            <input
              id="blik"
              type="radio"
              value="blik"
              checked={payment === 'blik'}
              onChange={(e) => setPayment(e.target.value)}
            ></input>
            <label htmlFor="blik">blik</label>
          </div>

          <div>
            <input
              id="paypal"
              type="radio"
              value="paypal"
              checked={payment === 'paypal'}
              onChange={(e) => setPayment(e.target.value)}
            />
            <label htmlFor="paypal">paypal</label>
          </div>

          <div>
            <input
              id="transfer"
              type="radio"
              value="transfer"
              checked={payment === 'transfer'}
              onChange={(e) => setPayment(e.target.value)}
            />
            <label htmlFor="transfer">przelew tradycyjny</label>
          </div>
        </fieldset>

        <fieldset className="of-fieldset">
          <legend className="of-select-title">
            Opcje dodatkowe do zamówienia
          </legend>
          {addition.map((object) => (
            <div>
              <input
                type="checkbox"
                id={object.id}
                value={object.title}
                checked={object.status}
                onChange={(e) =>
                  setAddition(
                    addition.map((item) =>
                      item.id === object.id
                        ? { ...item, status: e.target.checked }
                        : item
                    )
                  )
                }
              />

              <label htmlFor={object.id}>{object.title}</label>
            </div>
          ))}
        </fieldset>
        {/* checkbox  additions to order*/}
        {/* Userdata */}
        <h4 className="of-title">Dane do realizacji zamówienia</h4>
        <label className="of-select-title" htmlFor="name">
          Imię i nazwisko&#42;
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            validateField(name, e.target.value);
          }}
          placeholder="wpisz swoje imię i nazwisko"
        />
        {errors.username && <p>{errors.username}</p>}

        <label className="of-select-title" htmlFor="nick">
          Twój pseudonium&#42;
        </label>
        <input
          type="text"
          id="nick"
          value={nick}
          onChange={(e) => setNick(e.target.value)}
          placeholder="wpisz swój nick"
          required={true}
        />
        <label className="of-select-title" htmlFor="address">
          Adres do wysyłki&#42;
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="adres, na który mamy wsyłać zamówienie"
          required={true}
        />
        <label className="of-select-title" htmlFor="email">
          Adres e-mail&#42;
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jan.kowalski@gamil.com"
          required={true}
        />
        <label className="of-select-title" htmlFor="phone">
          Numer kontaktowy&#42;
        </label>
        <input
          type="text"
          id="phone"
          value={phone}
          // pattern="[+][0-9]{3} [0-9]{3} [0-9]{3} [0-9]{3}$"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+48 888 888 888"
          required={true}
        />
        <label className="of-select-title" htmlFor="comment">
          Dodatkowe uwagi do zamówienia
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Jeśli masz jakieś uwagi, wpisz je tutaj..."
        />
        {/* account */}
        <h4 className="of-title">Zakładanie konta</h4>
        <fieldset className="of-fieldset">
          <legend className="of-select-title">
            Chcę założyć konto razem z zamówieniem
          </legend>
          <div>
            <input
              type="checkbox"
              id="account"
              checked={account}
              onChange={(e) => setAccount(e.target.checked)}
            />
            <label htmlFor="account">zakładam konto</label>
          </div>
        </fieldset>
        <label className="of-select-title" htmlFor="password">
          Moje hasło
        </label>
        <input
          id="password"
          type="password"
          value={password}
          minlength="8"
          required
          name="password"
          placeholder="lubieKwi@tki65"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <label className="of-select-title" htmlFor="password-check">
          Powtórz hasło
        </label>
        <input
          id="password-check"
          type="password"
          value={passwordCheck}
          minlength="8"
          required
          name="password-check"
          placeholder="lubieKwi@tki65"
          onChange={(e) => setPasswordCheck(e.target.value)}
        ></input>
        {/* agreements */}
        <h4 className="of-title">Zgody i newsletter</h4>
        <fieldset className="of-fieldset">
          <legend className="of-select-title">
            Realizując zamówienie, akceptujesz regulamin naszego sklepu
          </legend>
          <div>
            <input
              type="checkbox"
              id="terms"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <label htmlFor="terms">akcetpuję regulamin&#42;</label>
          </div>
        </fieldset>
        <fieldset className="of-fieldset">
          <legend className="of-select-title">
            Dołącz do naszego newslettera z promocjami dla naszych klientów
          </legend>
          <div>
            <input
              type="checkbox"
              id="newsletter"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
            />
            <label htmlFor="newsletter">zapisuję się na listę mailingową</label>
          </div>
        </fieldset>
        <input
          className="submit-button"
          type="submit"
          value="Składam zamówienie"
        />
      </form>
    </>
  );
};
