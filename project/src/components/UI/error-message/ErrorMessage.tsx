import { useAppSelector } from '../../../hooks/useState';
import cl from './ErrorMessage.module.css';

export default function ErrorMessage(): JSX.Element | null {
  const { error } = useAppSelector((state) => state);
  if (error) {
    return (
      <div className={cl.ErrorMessage}>
        {error}
      </div>
    );
  }

  return null;
}