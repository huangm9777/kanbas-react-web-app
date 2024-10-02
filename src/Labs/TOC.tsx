import { Link } from 'react-router-dom';

export default function TOC() {
  return (
    <ul>
      <li id='wd-github'>
            <a

              className="App-link"
              href="https://github.com/huangm9777/kanbas-react-web-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              CODE REPOSITORY 
            </a> </li>
      <li><Link to="/Labs">Labs</Link></li>
      <li><Link to="/Labs/Lab1">Lab 1</Link></li>
      <li><Link to="/Labs/Lab2">Lab 2</Link></li>
      <li><Link to="/Labs/Lab3">Lab 3</Link></li>
      <li><Link to="/Kanbas">Kanbas</Link></li>
    </ul>
  );
}
