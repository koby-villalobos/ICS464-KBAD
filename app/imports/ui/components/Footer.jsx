import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
      <footer>
        <div id="footer" style={divStyle} className="ui center aligned container">
          <hr />
              KBAD Vaccine Scheduler <br />
              Developed by Koby Villalobos, Braden Betz, Adrian Au, Davin Takahashi <br />
          <a href="https://github.com/koby-villalobos/ICS464-KBAD">KBAD GitHub Page</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
