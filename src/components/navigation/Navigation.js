import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Signup } from '../signup/Signup';
import { Contact } from '../contact/Contact';
import { Home } from '../home/Home';
import { Layout } from '../layout/Layout';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />

                <Route path="/contact" element={<Layout><Contact /></Layout>} />

                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}