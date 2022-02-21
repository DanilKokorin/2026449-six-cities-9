import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="page-not-found" style={{ textAlign: 'center' }}>
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="img/page-not-found.png" alt="" style={{ width: '60vw' }} />
      </section>
      <Link to="/">Go to main page {'>'}</Link>
    </div>
  );
}
