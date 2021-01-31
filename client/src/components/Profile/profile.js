import React from 'react';
import { useAppContext } from '../../store';
import { useLoginCheck } from '../../utils/setAuthToken';
import Sidebar from '../Sidebar/Sidebar';

function Profile() {
    const [authState, appDispatch] = useAppContext();

    useLoginCheck(appDispatch);

    return (
        <div className="pl-0 m-0 container-fluid">
            <Sidebar />
            <div className="flex-row-reverse mt-5 mr-5 d-flex">
                <div className="col-xs-12 col-sm-12 col-md-9 jumbotron jumbotron-fluid cardBackground">
                    <div className="mx-auto col-sm-8">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table mx-auto col-md-6">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{authState.user.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{authState.user.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{authState.user.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Profile;
