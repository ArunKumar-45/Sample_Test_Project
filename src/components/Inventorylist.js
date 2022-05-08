import React, { useEffect, useState } from "react";

export const Inventorylist = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const [item, setItem] = useState("");
  const [allList, setAllList] = useState("");
  const onInputChange = (value) => {
    setItem(value);
  };
  const addToList = () => {
    const newList = inventoryList;
    while (item.length > 1) {
      if (inventoryList.length === 10) {
        return alert("maximum 10 item can be added");
      }

      if (inventoryList.includes(item)) {
        return alert("item  exits");
      } else {
        newList.push(item);
      }
    }
    setInventoryList(newList);
    setItem("");
  };
  const removeItem = (index) => {
    let newList = [...inventoryList];
    newList.splice(index, 1);
    console.log({ index, newList });
    setInventoryList(newList);
    setItem("");
  };
  const getAllList = () => {
    let allList = "";
    if (inventoryList.length > 0) {
      allList = inventoryList.join(",");
    } else {
      allList = "No Items";
    }
    setAllList(allList);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h2 style={{ fontSize: "24px", margin: "10px 0px" }}>
        {" "}
        Inventory management{" "}
      </h2>
      <div>
        <button onClick={getAllList}>Get All Items</button>
        <div>{allList}</div>
      </div>
      <input
        style={{
          margin: "10px 0px",
          borderRadius: "12px",
          border: "1px solid blue",
          outline: "none",
          padding: "10px"
        }}
        type="text"
        value={item}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
        required
      />
      <button
        type="submit"
        onClick={(e) => {
          addToList(e.target.value);
        }}
      >
        add
      </button>

      <div>
        <div>
          {inventoryList.length > 0 ? (
            inventoryList.map((itemName, index) => {
              return (
                <div
                  key={itemName}
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <span style={{ margin: "4px 10px" }}>{index + 1}</span>
                  <span style={{ margin: "4px 10px" }}>{itemName}</span>
                  <span
                    style={{
                      margin: "4px 10px",
                      textAlign: "right",
                      cursor: "pointer",
                    }}
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </span>
                </div>
              );
            })
          ) : (
            <div>No items</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inventorylist;
