import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidenav from './Sidenav';
import Topnav from './Topnav';

export default function Home() {
  return (
    <div className='d-flex' style={{ height: '100vh', overflow: 'hidden' }}>
      <Sidenav />
      <div
        className='flex-grow-1 d-flex flex-column'
        style={{ marginLeft: '240px', height: '100vh', overflow: 'hidden' }}
      >
        <Topnav />

        <div
          className='flex-grow-1 p-4'
          style={{ background: '#eee', overflow: 'hidden' }}
        >
          <h1>Home conternt</h1>
        </div>
      </div>
    </div>
  );
}
