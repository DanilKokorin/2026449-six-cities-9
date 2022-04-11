import { AppRoute, AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks/useState';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useState';
import { logoutAction } from '../../../store/api-action';

export default function AuthorizationStatusInterface() {
  const email = useAppSelector(({USER}) => USER.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { authorizationStatus } = useAppSelector(({USER}) => USER);
  const isAuthorization = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuthorization
          ?
          <>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">{email}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="#" onClick={() => navigate(AppRoute.Login)}>
                <span className="header__signout" onClick={(event) => {
                  event.preventDefault();
                  dispatch(logoutAction());
                }}
                >Sign out
                </span>
              </Link>
            </li>
          </>
          :
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
}
