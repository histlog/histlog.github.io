import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({ 
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading } 
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? <Spinner /> : <Fragment>
    <div className="pageWrap page scroller">
      <div className="container">
        <h1 className="large text-primary">
          Dashboard
        </h1>
        <p className="lead">
          <i className="fas fa-user"></i>
          Welcome { user && user.name }
        </p>
        { profile !== null ? (
          <Fragment>
            <DashboardActions />
          </Fragment>
        ) : (
          <Fragment>
            <p>You have not setup a profile. Please add some info.</p>
            <Link to='/create-profile' className="btn btn-primary my-1">
              Create Profile
            </Link>
          </Fragment>
        ) }
      </div>
    </div>
  </Fragment>
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);