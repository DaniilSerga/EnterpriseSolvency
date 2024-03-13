import React, {FC} from 'react';
import { Route, Routes } from 'react-router-dom';
import { CalculationPage, MainPage, ReportsPage } from 'pages';
import { Box } from '@mui/material';
import { Footer, Header } from 'components';

const GeneralRouter: FC = () => {
    return (
        <Box>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/calculation" element={<CalculationPage />} />
                <Route path="/reports" element={<ReportsPage />} />
            </Routes>
            <Footer />
        </Box>
    );
};

export default GeneralRouter;
