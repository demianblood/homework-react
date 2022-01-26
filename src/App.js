import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Characters, Episodes, Steam, Welcome} from "./pages";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {EpisodeDetails} from "./pages/EpisodeDetails/EpisodeDetails";

const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Steam/>}>
                    <Route index element={<Welcome/>}/>
                    <Route path={'episodes'} element={<Episodes/>}/>
                    <Route path={'episodes/:id'} element={<EpisodeDetails/>}/>
                    <Route path={'character'} element={<Characters/>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export {App};