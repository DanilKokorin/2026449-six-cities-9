import { AuthorizationStatus } from '../const';
import { useAppSelector } from './useState';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const useAppLoading = () => {
  const { authorizationStatus, isLodaing } = useAppSelector(({USER}) => USER);
  if (isCheckedAuth(authorizationStatus) || isLodaing) {
    return (
      true
    );
  }
  return false;
};

