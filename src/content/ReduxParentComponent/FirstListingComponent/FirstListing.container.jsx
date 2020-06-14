import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ListingComponent from "../../../components/ListingComponent";
import firstList from "../../../redux/firstList";
import selectedList from "../../../redux/selectedList";

const { addToSelectedList, removeFromSelectedList } = selectedList.actions;

const { updateFirstList } = firstList.actions;

const mapStateToProps = (state) => ({
  list: state[firstList.name],
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      updateList: updateFirstList,
      addToSelectedList,
      removeFromSelectedList,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingComponent);
