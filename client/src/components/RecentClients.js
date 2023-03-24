import { useState } from 'react';

function RecentClients() {
    const [messages, setMessages] = useState(null);

    return (
        <div className="col-sm-12 col-md-6 col-xl-4">
            <div className="h-100 bg-light rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="mb-0">Messages</h6>
                    <a href="">Show All</a>
                </div>
                </div>
        </div>
    );
}
export default RecentClients;
