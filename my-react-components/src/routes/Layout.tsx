import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Layout</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">New</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={`/form-elements`}>Form Elements</Link>
              </li>
              <li>
                <a href={`/components`}>Custom Components</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet/>
        </div>
      </>
    );
  }
  