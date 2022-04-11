import cl from './loader.module.css';

export default function Loader() {
  return (
    <div className={cl.loaderWrapper}><div className={cl.loader}></div></div>
  );
}
