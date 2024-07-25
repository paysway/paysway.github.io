import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import reportWebVitals from './reportWebVitals'
import {createHashRouter, HashRouter, Route, RouterProvider, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home/Home'
import {
    embeddedFormsPagePath,
    homePagePath,
    paymentPreparationPagePath,
    pennyTestingPagePath,
} from './constants'
import PaymentPreparation from './pages/PaymentPreparation/PaymentPreparation'
import PennyTesting from './pages/PennyTesting/PennyTesting'
import EmbeddedForms from './pages/EmbeddedForms/EmbeddedForms'

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route path={homePagePath} element={<Home />} />
                <Route path={paymentPreparationPagePath} element={<PaymentPreparation />} />
                <Route path={pennyTestingPagePath} element={<PennyTesting />} />
                <Route path={embeddedFormsPagePath} element={<EmbeddedForms />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
)

reportWebVitals()
