import React from 'react';
import { connect } from "react-redux";
import { ADD_FEATURE } from "../actions/index";
import AddedFeature from './AddedFeature';

const mapStateToProps = state => {
  return {
    features: state.features,
  };
}
const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default connect(mapStateToProps, {ADD_FEATURE})(AddedFeatures);
