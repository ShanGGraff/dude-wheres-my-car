import React from "react";
import CarDetail from "./CarDetail";
import CarList from "./CarList";
import Edit from "./EditTicketForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "./../actions";
import { withFirestore, isLoaded } from 'react-redux-firebase';


class CarControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

  }
}