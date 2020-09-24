import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import uuid from "react-uuid";
import "./generateinvoice.css";

class GenerateInvoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   displayCat: false,
      //   selectCat: false,
      itemCat: "",
      itemList: "",
      item: {},
    };
  }

  render() {
    console.log(this.props.itemsData);
    console.log(
      this.props.itemsData.filter(
        (items) => items.category === this.state.itemCat
      )
    );
    return (
      <div>
        <h3>Generate Invoice </h3>
        <form className="form">
          <label>Select Category</label>
          <select
            id="itemcat"
            value={this.state.itemCat}
            onChange={(e) =>
              this.setState({ ...this.state, itemCat: e.target.value })
            }
          >
            <option value=""> Choose an option </option>
            {this.props.itemsData.map((item) => {
              return (
                <option key={uuid()} value={item.category}>
                  {item.category}
                </option>
              );
            })}
          </select>
          {/* Category sub-cat */}
          <label id="itemlist">
            Select Sub Category for {this.state.itemCat}
          </label>
          <select
            id="itemlist"
            value={this.state.item.name}
            onChange={(e) =>
              this.setState({
                ...this.state,
                item: { ...this.state.item, name: e.target.value },
              })
            }
          >
            <option value=""> Select an item from sub menu</option>
            {/* {this.props.itemsData[0].itemList.map((item) => {
              return <option> {item.item}</option>;
            })} */}
            {this.props.itemsData
              .filter((item) => item.category == this.state.itemCat)
              .map((item) => {
                return item.itemList.map((itemlist) => {
                  return <option> {itemlist.item}</option>;
                });
              })}
          </select>
        </form>

        {/* <form>
          <label>Full Name</label>
          <input type="text"></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              this.setState({ ...this.state, displayCat: true });
            }}
          >
            {" "}
            Add Item
          </button>
          {this.state.displayCat ? (
            <div>
              {" "}
              <label> Select item cat</label>
              <select
                onChange={(e) => {
                  this.setState({
                    ...this.state,
                    itemCat: e.target.value,
                    selectCat: true,
                    // itemList: this.props.itemsData.filter(
                    //   (item) => item.cat == e.target.value
                    // ),
                  });
                }}
              >
                <option>Choose a category</option>
                {this.props.itemsData.map((item) => (
                  <option key={uuid()} value={item.cat}>
                    {" "}
                    {item.cat}
                  </option>
                ))}
              </select>{" "}
            </div>
          ) : null}
          {this.state.selectCat ? (
            <div>
              {
                this.props.itemsData
                  .filter((item) => item.cat == this.state.itemCat)
                  .map((item) => {
                    return item.itemList.map((itemlist) => {
                      return <li> {itemlist.item}</li>;
                    });
                  })
                // .map((selectedItems) => (
                //   <li>{selectedItem.cat} {selectedItem.itemList.map( )</li>
                // ))}
              }
            </div>
          ) : null} */}
        {/* </form> */}
        <Link to="/displayinvoice">
          {" "}
          <button> Display Invoice</button>{" "}
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemsData: state.items,
  };
};

export default connect(mapStateToProps)(GenerateInvoice);
