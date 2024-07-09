import React from 'react';

const OrderList = ({ items }) => {
    return (
        <div className="order-list">
            <h2>Order List</h2>
            {items.length === 0 ? (
                <p>No items selected.</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {item.title} - Quantity: {item.count}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrderList;
