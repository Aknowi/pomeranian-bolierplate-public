import { useState } from 'react';
import './styles.css';

const additionList = [
  { id: 1, title: 'ustawienie środowiska', status: false },
  { id: 2, title: 'intro do GitHub', status: false },
  { id: 3, title: 'materiały dodatkowe', status: false },
];

export const OrderForm = () => {
  const [isSend, setIsSend] = useState(false);
  const [course, setCourse] = useState('frontend');
  const [payment, setPayment] = useState('blik');
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
    passwordCheck,
    newsletter,
    terms,
  };

  const handleOrder = (e) => {
    e.preventDefault();

    if (!Object.values(errors).some((error) => error !== '')) {
      setIsSend(true);
      console.log('Form submitted:', data);
    }
  };

  const [errors, setErrors] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    password: '',
    passwordCheck: '',
  });

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };

    switch (fieldName) {
      case 'name':
        newErrors.name =
          (value.trim() === '' ? 'Podaj swoje Imie i Nazwisko' : '') ||
          !/^(\w{3,}\s+\w{3,})$/gm.test(value)
            ? 'Podaj swoje imię i nazwisko'
            : '';

        break;
      case 'address':
        newErrors.address = value.length < 4 ? 'Podaj swój adres' : '';
        break;
      case 'email':
        newErrors.email = !/^(\s*\w+@\w+\.\w+\s*)$/gm.test(value)
          ? 'Wprowadź poprawny adres e-mail'
          : '';
        break;
      case 'phone':
        newErrors.phone =
          !/^(\+\d{2,3})?\s?\d{3}[-\s]?\d{3}[-\s]?\d{3}$/gm.test(value)
            ? 'Wprowadź poprawny numer telefonu'
            : '';
        break;
      case 'password':
        newErrors.password =
          value.length < 8 ? 'Hasło musi zawierać przynajmniej 8 znaków' : '';
        break;
      case 'password-check':
        newErrors.passwordCheck =
          value !== password ? 'Hasła muszą się zgadzać' : '';
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
              name="payment"
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
              name="payment"
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
              name="payment"
              checked={payment === 'transfer'}
              onChange={(e) => setPayment(e.target.value)}
            />
            <label htmlFor="transfer">przelew tradycyjny</label>
          </div>
        </fieldset>

        {/* checkbox  additions to order*/}

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

        {/* Userdata */}

        <h4 className="of-title">Dane do realizacji zamówienia</h4>
        <label className="of-select-title" htmlFor="name">
          Imię i nazwisko&#42;
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            validateField(e.target.name, e.target.value);
          }}
          placeholder="wpisz swoje imię i nazwisko"
          aria-invalid={errors.username ? 'true' : 'false'}
          required
          className={`form-input ${errors.name ? 'form-input-error' : ''}`}
        />
        {errors.name && <p className="form-error">{errors.name}</p>}

        <label className="of-select-title" htmlFor="nick">
          Twój pseudonium
        </label>
        <input
          type="text"
          id="nick"
          value={nick}
          onChange={(e) => setNick(e.target.value)}
          placeholder="wpisz swój nick"
          className="form-input"
        />
        <label className="of-select-title" htmlFor="address">
          Adres do wysyłki&#42;
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            validateField(e.target.name, e.target.value);
          }}
          placeholder="adres, na który mamy wsyłać zamówienie"
          required={true}
          className={`form-input ${errors.address ? 'form-input-error' : ''}`}
        />
        {errors.address && <p className="form-error">{errors.address}</p>}

        <label className="of-select-title" htmlFor="email">
          Adres e-mail&#42;
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateField(e.target.name, e.target.value);
          }}
          placeholder="jan.kowalski@gamil.com"
          required={true}
          className={`form-input ${errors.email ? 'form-input-error' : ''}`}
        />
        {errors.email && <p className="form-error">{errors.email}</p>}

        <label className="of-select-title" htmlFor="phone">
          Numer kontaktowy&#42;
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            validateField(e.target.name, e.target.value);
          }}
          placeholder="+48 888 888 888"
          required={true}
          className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
        />
        {errors.phone && <p className="form-error">{errors.phone}</p>}

        <label className="of-select-title" htmlFor="comment">
          Dodatkowe uwagi do zamówienia
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Jeśli masz jakieś uwagi, wpisz je tutaj..."
          className="form-input"
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

        {account && (
          <>
            <label className="of-select-title" htmlFor="password">
              Moje hasło
            </label>
            <input
              id="password"
              type="password"
              value={password}
              minLength="8"
              name="password"
              placeholder="lubieKwi@tki65"
              onChange={(e) => {
                setPassword(e.target.value);
                validateField(e.target.name, e.target.value);
              }}
              required={account === true}
              className={`form-input ${
                errors.password ? 'form-input-error' : ''
              }`}
            ></input>
            {errors.password && <p className="form-error">{errors.password}</p>}

            <label className="of-select-title" htmlFor="password-check">
              Powtórz hasło
            </label>
            <input
              id="password-check"
              type="password"
              value={passwordCheck}
              minLength="8"
              name="password-check"
              placeholder="lubieKwi@tki65"
              onChange={(e) => {
                setPasswordCheck(e.target.value);
                validateField(e.target.name, e.target.value);
              }}
              required={account === true}
              className={`form-input ${
                errors.passwordCheck ? 'form-input-error' : ''
              }`}
            ></input>
            {errors.passwordCheck && (
              <p className="form-error">{errors.passwordCheck}</p>
            )}
          </>
        )}

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
              required
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
        {isSend && (
          <p id="form-send">Formularz został poprawnie wysłany, dziękujemy!</p>
        )}
      </form>
    </>
  );
};
