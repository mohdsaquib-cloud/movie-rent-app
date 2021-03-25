import React from "react";

const ListGroup = (props) => {
    const { items, onItemSelect, selectedItem, textProperty, valueProperty } = props;
    return (
        <div>
            <ul className="list-group">
                {items.map((item) => (
                    <li
                        key={item[valueProperty]}
                        style={{ cursor: "pointer" }}
                        onClick={() => onItemSelect(item)}
                        className={
                            item === selectedItem ? "list-group-item active" : "list-group-item "
                        }
                    >
                        {item[textProperty]}
                    </li>
                ))}
            </ul>
        </div>
    );
};
ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id",
};

export default ListGroup;
