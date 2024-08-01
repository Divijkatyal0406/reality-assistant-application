import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const OrderTrackingPage = () => {
  const [tableNumber, setTableNumber] = useState('');
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const q = query(collection(db, 'orders'), where('tableNo', '==', parseInt(tableNumber)));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setError('No orders found for this table number.');
      } else {
        console.log("hello")
        const orderData = querySnapshot.docs[0].data();
        setOrder(orderData);
      }
    } catch (err) {
      setError('Error fetching order data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Track Order</h1>
      <input
        type="number"
        value={tableNumber}
        onChange={(e) => setTableNumber(e.target.value)}
        placeholder="Enter table number"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {order && (
        <div>
          <h2 style={{color:"red"}}>Order Details</h2>
          <p style={{color:"red"}}>Status: {order.status}</p>
          <h3 style={{color:"red"}}>Items:</h3>
          <ul style={{color:"red"}}>
            {order.items.map((item, index) => (
              <li key={index}>
                {item.name} - Qty: {item.qty} - Price: ${item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderTrackingPage;
