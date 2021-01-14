import { Link } from 'react-router-dom';
import React from 'react';
import AddNotice from './AddNotice';
import './AdminDashboard.css';
import ManageNotice from './ManageNotice';

const AdminDashboard = () => {
    return (
        <div className="admin__dashboard">
            <div className="admin__left">
                <ul>
                    <li><Link to="/admin">Dashboard</Link></li>
                    <li><Link to="/add-notice-dashboard">Add Notice</Link></li>
                    <li><Link>All Notice</Link></li>
                </ul>
            </div>
            <div className="admin__right" style={{ marginTop: '20px' }}>
                <ManageNotice></ManageNotice>
                {/* <AddNotice></AddNotice> */}
            </div>
        </div>
    );
};

export default AdminDashboard;