import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ListingComponent from "../../../components/ListingComponent";
import secondList from "../../../redux/secondList";
import selectedList from "../../../redux/selectedList";

const { addToSelectedList, removeFromSelectedList } = selectedList.actions;

const {
  addToSelectedInSecondList,
  removeFromSelectedInSecondList,
} = secondList.actions;

const mapStateToProps = (state) => ({ list: state[secondList.name] });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      adddToList: addToSelectedInSecondList,
      removeFromList: removeFromSelectedInSecondList,
      addToSelectedList,
      removeFromSelectedList,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingComponent);
