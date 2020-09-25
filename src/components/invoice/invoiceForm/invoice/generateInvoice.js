import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import uuid from "react-uuid";
import "./generateinvoice.css";
import BillBoard from "../../../bill-board/billBoard";

class GenerateInvoice extends React.Component {
  constructor() {
    super();
    this.state = {
      itemCat: "",
      itemList: "",
      item: {},
      addedBill: {},
      bills: [],
    };
  }

  render() {
    return (
      <div>
        <h3>Generate Invoice </h3>

        <form className="form">
          <label>Category</label>
          <select
            id="itemcat"
            value={this.state.itemCat}
            onChange={(e) =>
              this.setState({ ...this.state, itemCat: e.target.value })
            }
          >
            <option value="">Category</option>
            {this.props.itemsData.map((item) => {
              return (
                <option key={uuid()} value={item.category}>
                  {item.category}
                </option>
              );
            })}
          </select>
          {/* Category sub-cat */}
          <label id="itemlist">Sub Category</label>
          <select
            id="itemlist"
            value={this.state.item.name}
            onChange={(e) => {
              var dataset = e.target[e.target.selectedIndex].dataset;
              this.setState({
                ...this.state,
                item: {
                  ...this.state.item,
                  name: e.target.value,
                  price: dataset.price,
                },
              });
            }}
          >
            <option value="">Sub Category</option>
            {this.props.itemsData
              .filter((item) => item.category == this.state.itemCat)
              .map((item) => {
                return item.itemList.map((itemlist) => {
                  return (
                    <option value={itemlist.item} data-price={itemlist.price}>
                      {" "}
                      {itemlist.item}
                    </option>
                  );
                });
              })}
          </select>
          <label> Quantity </label>
          <select
            id="quantity"
            value={this.state.item.quantity}
            onChange={(e) =>
              this.setState({
                ...this.state,
                item: { ...this.state.item, quantity: e.target.value },
              })
            }
          >
            {" "}
            <option value="">Quantity</option>
            <option value="1">1 </option>
            <option value="2">2 </option>
            <option value="3">3 </option>
          </select>
          <button
            onClick={(e) => {
              e.preventDefault();
              this.props.addItemToBill(this.state.item);
              this.setState({
                bills: this.state.bills.concat(this.state.item),
              });
            }}
          >
            Add
          </button>
        </form>
        <div>
          {" "}
          {this.state.item.name} {this.state.item.price}{" "}
          {this.state.item.quantity}
        </div>

        <Link to="/displayinvoice">
          {" "}
          <button> Display Invoice</button>{" "}
        </Link>
        <BillBoard item={this.state.bills} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemsData: state.menuReducer.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToBill: (item) => {
      dispatch({ type: "ADD_ITEM_TO_BILL", payload: item });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenerateInvoice);
