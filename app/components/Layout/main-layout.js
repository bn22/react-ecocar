import React from 'react';
import { Link } from 'react-router';


const MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/join" activeClassName="active">Join</Link></li>
            <li><Link to="/media" activeClassName="active">Media</Link></li>
            <li><Link to="/sponsor" activeClassName="active">Sponsor</Link></li>
            <li><Link to="/team" activeClassName="active">Team</Link></li>
          </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
        <footer className="primary-footer">
          <p>UW EcoCar <br></br>
            Mechancial Engineering <br></br>
            Engineering Annex, Steven Way <br></br>
            Seattle, WA 98105 <br></br>
            uwecocar3@gmail.com</p>
          <ul>
            <li><Link to="/" activeClassName="active">Facebook</Link></li>
            <li><Link to="/join" activeClassName="active">Twitter</Link></li>
            <li><Link to="/media" activeClassName="active">Email</Link></li>
          </ul>
        </footer>
      </div>
    );
  }
});

export default MainLayout;
