import { useRef, FormEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, EMAIL_PATTERN, MAIN_CITIES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/useState';
import { loginAction } from '../../store/api-action';
import { AuthData } from '../../types/AuthData';
import Header from '../ui/header/header';
import { setUser } from '../../store/user-process/user-process';
import { setCity } from '../../store/main-data/main-data';
import { setError } from '../../store/error-process/error-process';

export default function Login(): JSX.Element {
  const { authorizationStatus } = useAppSelector(({USER}) => USER);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    evt.stopPropagation();

    if(!loginRef?.current?.value.match(EMAIL_PATTERN)) {
      dispatch(setError('Email is not a valid email'));
      return false;
    }

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(setError(''));
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(setUser(loginRef.current.value));
      navigate(AppRoute.MainPage);
    }
  };

  function getRandomCity() {
    let randomNumber = 0;
    randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber > 6) {
      randomNumber -= 4;
    }
    return randomNumber;
  }

  const randomCity = getRandomCity();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.MainPage);
    }
  }, [authorizationStatus, navigate]);

  return (
    <div className="page  page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  id="password"
                  minLength={2}
                  pattern="(?=.*\d)(.*[0-9]{1,})(.*[A-z]{1,})"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                to='/'
                className="locations__item-link"
                onClick={() => dispatch(setCity(MAIN_CITIES[randomCity]))}
              >
                <span>{MAIN_CITIES[randomCity]}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

