import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import DashboardNewsCard from '../../DashboardNewsCard/DashboardNewsCard';
import { useAppContext } from '../../../store';
import { useLoginCheck } from '../../../utils/setAuthToken';

function DashBoard() {
    const [state, appDispatch] = useAppContext();

    useLoginCheck(appDispatch);

    return (
        <div className="pl-0 container-fluid">
            <Sidebar />
            <div>
                <h1>
                    Welcome {state.user.first_name} {state.user.last_name}
                </h1>
                <div className="flex-row-reverse mr-5 d-flex">
                    <DashboardNewsCard />
                </div>
            </div>
        </div>
    );
}

export default DashBoard;
