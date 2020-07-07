import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = (url) => {
  console.log(url);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Layout({ children, pageTitle, docTitle }) {
  return (
    <div className="o-page">
      <Head>
        <title>{docTitle}</title>
      </Head>
      <header>
        <h1>
          Next Portfolio <span>.</span>
        </h1>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/hireme">
            <a>Hire me</a>
          </Link>
        </nav>
      </header>
      <main className="o-main">
        <h2 className="c-page-title">
          <span>
            {pageTitle.split(" ")[0]} <span>{pageTitle.split(" ")[1]}</span>
          </span>
        </h2>
        {children}
      </main>
      <footer>
        <span>Copyright reserved &copy; {new Date().getFullYear()}</span>
      </footer>
      <style jsx>{`
        .o-page {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .o-main {
          flex: 1;
          padding: 1em;
          position: relative;
          padding-left: 8rem;
          color: #333;
        }

        .c-page-title {
          font-size: 22px;
          transform: scale(-1);
          writing-mode: vertical-lr;
          position: absolute;
          left: 55px;
          top: 0;
          height: 100%;
          text-align: right;
          margin: 0;
          padding-bottom: 0;
          box-sizing: border-box;
          padding-bottom: 40px;
          letter-spacing: 0;
        }

        .c-page-title:before {
          content: "";
          display: block;
          height: 100%;
          width: 1px;
          background: hsl(40, 84%, 75%);
          position: absolute;
          left: calc(50% - 3px);
          z-index: -1;
        }

        .c-page-title > span {
          background: #fff;
          z-index: 1;
          padding: 13px 0;
          font-style: italic;
          font-weight: 500;
        }

        .c-page-title > span span {
          font-weight: 800;
        }

        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 1;
        }

        header h1 {
          margin: 0;
          font-size: 28px;
          position: relative;
          display: flex;
        }

        header h1:before {
          content: "";
          display: block;
          width: 86px;
          height: 86px;
          background: hsla(40, 85%, 75%, 1);
          border-radius: 50%;
          position: absolute;
          top: -10px;
          z-index: -1;
          left: 10px;
        }

        header h1 span {
          color: hsl(40, 84%, 75%);
        }

        footer {
          margin-top: auto;
          text-align: center;
        }

        header,
        footer {
          padding: 1em;
          background: #fff7da;
        }

        nav a {
          padding: 0.5em 1em;
          border-bottom: 1px solid hsl(0, 0%, 50%);
          text-decoration: none;
          font-weight: 500;
          font-size: 17px;
        }

        nav a:hover {
          background: hsla(40, 85%, 75%, 1);
          border-bottom-color: #212121;
        }
      `}</style>
    </div>
  );
}

export default Layout;