export function BootstrapNavigation() {
  return (
    <div>
      <div id="wd-css-navigating-with-tabs">
        <h2>Tabs</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" >Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" >Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  )
}