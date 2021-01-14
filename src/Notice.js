import { BorderBottom } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from './firebaseConfig';
import './Notice.css';
const Notice = () => {
    const { notice_id } = useParams();
    const [notices, setNotices] = useState([])
    useEffect(() => {
        db.collection('notices').orderBy('timestamp', 'desc').onSnapshot(snapshot => setNotices(snapshot.docs.map(doc => doc.data())))

    }, [])

    return (
        <div>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <div class="notice-container">

            {
                notices.map((notice, id) => id == notice_id && <div className="notice-section">
                    <h1 style={{marginBottom:'40px'}}>{notice.title}</h1>
                    <p style={{textAlign:'justify'}}>{notice.description}</p>
                </div>)
            }
            </div>
        </div>
    );
};

export default Notice;