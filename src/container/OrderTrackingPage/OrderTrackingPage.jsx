import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import './OrderTrackingPage.css';

const OrderTrackingPage = () => {
  const [tableNumber, setTableNumber] = useState('');
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (tableNumber) {
      handleSearch(tableNumber);
    }
  }, []);

  const handleSearch = async (tableNo) => {
    setLoading(true);
    setError('');
    try {
      const q = query(collection(db, 'orders'), where('tableNo', '==', parseInt(tableNo)));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setError('No orders found for this table number.');
      } else {
        const orderData = querySnapshot.docs[0].data();
        setOrder(orderData);
      }
    } catch (err) {
      setError('Error fetching order data.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 1:
        return 'Placed';
      case 2:
        return 'Accepted';
      case 3:
        return 'Preparing';
      default:
        return 'Delivered';
    }
  };

  return (
    <div className="track-order-container">
      <h1>Track Order</h1>
      <input
        type="number"
        value={tableNumber}
        onChange={(e) => setTableNumber(e.target.value)}
        placeholder="Enter table number"
        className="input"
      />
      <button onClick={() => handleSearch(tableNumber)} disabled={loading} className="button">
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <p className="error">{error}</p>}
      {order && (
        <div className="order-details">
          <h2>Order Details</h2>
          <p>Status: {getStatusText(order.status)}</p>
          <h3>Items:</h3>
          <ul>
            {order.items.map((item, index) => (
              <li key={index}>
                {item.name} - Qty: {item.qty}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderTrackingPage;