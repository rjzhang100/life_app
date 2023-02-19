import React from 'react';
import PiChart from './pichart';
import RecentTransactionsTable from './recentTransactions';
import '../styles/dashboard.css';
import {Grid, Item} from '@mui/material';
import theme from '../styles/theme';
import {ThemeProvider} from "@mui/material/styles";

class Dashboard extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Grid container spacing={10}>
                    <Grid item xs={12} className="finance-header">
                        <h2>Your Financials </h2>
                    </Grid>
                    <Grid item xs={6} className="griditem-finance-header">
                        <h3 className="griditem-finance-header">Your Spending</h3>
                        <PiChart/> 
                    </Grid>
                    <Grid item xs={6}>
                        <h3 className="griditem-finance-header">Recent Transactions</h3>
                        <RecentTransactionsTable/> 
                    </Grid>
                </Grid>
            </ThemeProvider>
        );
    };
}


export default Dashboard;