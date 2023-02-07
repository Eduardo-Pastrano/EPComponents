import React from 'react'
import CartWidget from './CartWidget'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <div>
            <Tabs size='md' variant='enclosed'>
                <TabList>
                    <Tabs size='md' variant='enclosed'>
                        <TabList>
                            <Tab>EPComponents</Tab>
                        </TabList>
                    </Tabs>
                    <Tab>Procesadores</Tab>
                    <Tab>Tarjetas Gráficas</Tab>
                    <Tab>Almacenamientos</Tab>
                    <Tab>Memorias RAM</Tab>
                    <Tab>Gabinetes</Tab>
                    <Tab>Ventiladores</Tab>
                    <Tab><CartWidget /></Tab>
                </TabList>
            </Tabs>
        </div>
    )
}

export default NavBar