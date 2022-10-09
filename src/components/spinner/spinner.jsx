import React from 'react';
import { Fragment } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { connect } from 'react-redux';

function Spinner(props) {
  const { isLoading } = props;
  console.log('isLoading', isLoading);

  return (
    <Fragment>
      {isLoading && (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      )}
    </Fragment>
  );
}
const mapStateToProps = state => ({
  isLoading: state.contacts.loading,
});

export default connect(mapStateToProps)(Spinner);
