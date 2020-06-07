import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ListingComponent from "../../../components/ListingComponent";
import selectedList from "../../../redux/selectedList";

const { addToSelectedList, removeFromSelectedList } = selectedList.actions;

const mapStateToProps = (state) => ({
  list: state[selectedList.name],
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      addToSelectedList,
      removeFromSelectedList,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingComponent);
