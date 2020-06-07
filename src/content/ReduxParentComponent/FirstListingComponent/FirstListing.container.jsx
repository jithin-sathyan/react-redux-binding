import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ListingComponent from "../../../components/ListingComponent";
import firstList from "../../../redux/firstList";

const {
  addToSelectedInFirstList,
  removeFromSelectedInFirstList,
} = firstList.actions;

const mapStateToProps = (state) => ({
    list: state[firstList.name],
  });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      addToSelectedInFirstList,
      removeFromSelectedInFirstList,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingComponent);
