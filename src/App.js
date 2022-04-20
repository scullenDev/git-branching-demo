import logo from './logo.svg';
import './App.css';
import Alert from './Alert';

function App() {
  return (
    <>
      <Alert theme="warning" closeable>
        Beware phishing scams!
      </Alert>

      <Alert icon="fas fa-dollar-sign">
        Your account does not permit this action!{' '}
        <a href="#">Upgrade here...</a>
      </Alert>

      <Alert theme="success" icon="far fa-thumbs-up" closeable>
        You&#39;re now logged in!
      </Alert>

      <Alert theme="main">Welcome to our app!</Alert>

      <Alert icon="fas fa-ban" theme="error">
        <strong>There has been an error with your request!</strong> Please try
        again later.
      </Alert>

      {/* non-React syntax: Alert("fas fa-exclamation-triangle", "info", true) */}
      <Alert icon="fas fa-exclamation-triangle" theme="info" closeable>
        Our application will be down for maintenance from 2:00-3:15am MT.
      </Alert>
    </>
  );
}

export default App;
