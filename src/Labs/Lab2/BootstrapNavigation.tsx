export function BootstrapNavigation() {
  return (
    <div>
      <div id="wd-css-navigating-with-tabs">
        <h2>Tabs</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href='Kanbas/Courses/1234/Home'>Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='Kanbas/Courses/1234/Home'>Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='Kanbas/Courses/1234/Home'>Link</a>
          </li>
          <li className="nav-item" >
            <a className="nav-link disabled" href='Kanbas/Courses/1234/Home'>Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  )
}