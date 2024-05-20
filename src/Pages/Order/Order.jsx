import { useState } from 'react';
import orderImg from '../../assets/shop/banner2.jpg';
import Cover from '../../components/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrderTabs from './OrderTabs';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    // const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu()
    
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");
    const drinks = menu.filter(item => item.category === "drinks");
    return (
        <div>
            <Helmet>
                <title>Dev Restau. || Order</title>
            </Helmet>
            <Cover img={orderImg} title={"Order Food"}></Cover>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabs items={salad}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={pizza}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={soups}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={dessert}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={drinks}></OrderTabs>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;