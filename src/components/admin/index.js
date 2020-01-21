import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Parent from "./components/Parent";
import Child from "./components/Child";
import 'react-tabs/style/react-tabs.css';
import './index.scss';

const Admin = () => {
    return (
        <div className="admin">
            <Parent>
                <Child />
                <Child />
            </Parent>
            <Tabs>
                <TabList>
                    <Tab className="upload-new-product">Upload new product</Tab>
                    <Tab>All assets</Tab>
                    <Tab>All users</Tab>
                    <Tab>Sell statistic</Tab>
                </TabList>

                <TabPanel>
                    <h2>upload new product content</h2>
                </TabPanel>
                <TabPanel>
                    <h2>All users tab content</h2>
                </TabPanel>
                <TabPanel>
                    <h2>All users tab content</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Sell statistic tab content</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
};

export default Admin;