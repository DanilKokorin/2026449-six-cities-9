import { AuthorizationStatus } from '../const';
import { useAppSelector } from './useState';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const useAppLoading = () => {
  const { authorizationStatus } = useAppSelector(({USER}) => USER);
  const { isLodaing } = useAppSelector(({MAIN}) => MAIN);
  if (isCheckedAuth(authorizationStatus) || isLodaing) {
    return (
      true
    );
  }
  return false;
};

