export default class extends React.Component {
  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="http://qbit.dots.org.ua/screen.css"
          type="text/css"
          media="all"
        />
        <div id="container">
          <div id="header">
            <table border="0">
              <tbody>
                <tr>
                  <td>
                    <a href="/" title="Q-BIT">
                      <img
                        src="/images/logo.gif"
                        width="100"
                        height="70"
                        border="0"
                        alt="Q-BIT Logo"
                      />
                    </a>
                  </td>
                  <td>
                    <h1>Молодёжное научное общество Q-Bit, г. Харьков</h1>
                    <h2>
                      ПРАКТИКУМ ПО ПРОГРАММИРОВАНИЮ (&#0171;DOTS&#0187; v1.5<img
                        alt="b"
                        src="/images/b.gif"
                        style={{ marginBottom: "-4px" }}
                      />)
                    </h2>
                  </td>
                </tr>
              </tbody>
            </table>{" "}
          </div>
          <h1>hi there</h1>
        </div>
      </>
    );
  }
}
