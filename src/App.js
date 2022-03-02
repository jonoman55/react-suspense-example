import React, { Suspense } from 'react';

import { Spinner } from './components/Spinner';
import PostDetails from './components/PostDetails';
import ProfileDetails from './components/ProfileDetails';

function App() {
    return (
        <div className='container my-5'>
            <Suspense fallback={<Spinner />}>
                <ProfileDetails />
                <PostDetails />
            </Suspense>
        </div>
    );
};

export default App;