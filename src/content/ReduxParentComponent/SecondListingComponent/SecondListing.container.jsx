import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ListingComponent from "../../../components/ListingComponent";
import secondList from "../../../redux/secondList";

const {
  addToSelectedInSecondList,
  removeFromSelectedInSecondList,
} = secondList.actions;

const mapStateToProps = (state) => ({ list: state[secondList.name] });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      addToSelectedInSecondList,
      removeFromSelectedInSecondList,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingComponent);
