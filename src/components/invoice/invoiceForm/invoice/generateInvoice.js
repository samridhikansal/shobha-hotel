import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import uuid from "react-uuid";

class GenerateInvoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCat: false,
      selectCat: false,
      itemCat: "",
      itemList: "",
    };
  }

  render() {
    console.log("cat is " + this.state.itemCat);

    console.log();

    return (
      <div>
        <h3>Generate Invoice </h3>
        {/* value={this.state.value} onChange={this.handleChange} */}
        <label>Select Category</label>
        <select>
          {this.props.itemsData.map((item) => {
            return <option value={item.category}>{item.category}</option>;
          })}
        </select>
        <label>Select Sub Category</label>
        <select>
          {this.props.itemsData.map((item) => {
            return <option value={item.category}>{item.category}</option>;
          })}
        </select>
        {this.props.itemsData.map((item) => {
          return <p>{item.cat}</p>;
        })}
        <form>
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
          ) : null}
        </form>
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
