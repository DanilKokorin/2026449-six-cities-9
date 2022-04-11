import { useAppSelector } from '../../../hooks/useState';
import cl from './error-message.module.css';

export default function ErrorMessage(): JSX.Element | null {
  const { error } = useAppSelector(({ERROR}) => ERROR);
  if (error) {
    return (
      <div className={cl.ErrorMessage}>
        {error}
      </div>
    );
  }

  return null;
}
