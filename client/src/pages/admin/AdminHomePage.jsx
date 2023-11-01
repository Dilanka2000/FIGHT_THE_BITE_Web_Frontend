import React, { useContext, useEffect, useState } from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'
import EmpHeader from '../../components/header/EmpHeader';
import { MAinFlexContainer } from '../../assets/styles/globalStyls';
import { AffectedRate, CalenderTitle, Card, CardRoles, CardTitle, Cards, Chart, ChartTitle, Charts, DashboardLeftContainer, DashboardRightContainer, LineChartContainer, Role, RoleDesc, RoleIcon } from './z-adminStyle';
import gnImg from "../../assets/images/gn.png";
import phiImg from "../../assets/images/phi.png";
import campImg from "../../assets/images/camp.png";
import { BarChart, LineChart, Bar, XAxis, YAxis, Legend, Tooltip, Line, ResponsiveContainer } from "recharts";
import GlogalContext from '../../context/GlobalContext';
import { getMonth } from '../../components/calender/util';
import SmallMonth from '../../components/calender/SmallMonth';
import SmallCalenderHeader from '../../components/calender/SmallCalenderHeader';

export default function AdminHomePage() {

    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex } = useContext(GlogalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    return (
        <AdminLayout>
            <EmpHeader pageName={"DashBoard"} />

            <MAinFlexContainer>
                <DashboardLeftContainer>
                    <Cards>
                        <Card>
                            <CardTitle>Affected Rate</CardTitle>
                            <AffectedRate>
                                <div>
                                    123<span>/1245</span>
                                </div>
                            </AffectedRate>
                        </Card>
                        <Card>
                            <CardRoles>
                                <Role>
                                    <RoleIcon>
                                        <img src={gnImg} alt="GNpic" />
                                    </RoleIcon>
                                    <RoleDesc>
                                        <h4>Village Officers</h4>
                                        <div>932</div>
                                    </RoleDesc>
                                </Role>
                                <Role>
                                    <RoleIcon>
                                        <img src={phiImg} alt="PHIpic" />
                                    </RoleIcon>
                                    <RoleDesc>
                                        <h4>PHIs</h4>
                                        <div>754</div>
                                    </RoleDesc>
                                </Role>
                                <Role>
                                    <RoleIcon>
                                        <img src={campImg} alt="CAMPpic" />
                                    </RoleIcon>
                                    <RoleDesc>
                                        <h4>Campaigns</h4>
                                        <div>40</div>
                                    </RoleDesc>
                                </Role>
                            </CardRoles>
                        </Card>
                    </Cards>

                    <Charts>
                        <Chart>
                            <ChartTitle>Daily Updates</ChartTitle>
                            <ResponsiveContainer width="95%" height={400}>
                                <BarChart data={data}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="affected" fill="#FB7D5B" />
                                    <Bar dataKey="get_well" fill="#FCC43E" />
                                    <Bar dataKey="death" fill="#5A96E3" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Chart>
                        <Chart>
                            <CalenderTitle>Campaigns</CalenderTitle>
                            <SmallCalenderHeader />
                            <SmallMonth month={currentMonth} />
                        </Chart>
                    </Charts>

                    <LineChartContainer>
                        <ChartTitle>
                            Number of patients growing monthly
                        </ChartTitle>
                        <ResponsiveContainer width="95%" height={400}>
                            <LineChart width={1050} height={400} data={data1}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="affected"
                                    stroke="#FB7D5B"
                                    strokeWidth={5}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="get_well"
                                    stroke="#FCC43E"
                                    strokeWidth={5}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="death"
                                    stroke="#5A96E3"
                                    strokeWidth={5}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </LineChartContainer>
                </DashboardLeftContainer>
                <DashboardRightContainer></DashboardRightContainer>
            </MAinFlexContainer>
        </AdminLayout>
    );
}


const data = [
    {
        name: "Mon",
        affected: 400,
        get_well: 240,
        death: 240,
    },
    {
        name: "Tue",
        affected: 300,
        get_well: 139,
        death: 221,
    },
    {
        name: "Wed",
        affected: 200,
        get_well: 580,
        death: 229,
    },
    {
        name: "Thu",
        affected: 278,
        get_well: 390,
        death: 200,
    },
    {
        name: "Fri",
        affected: 189,
        get_well: 480,
        death: 218,
    },
    {
        name: "Sat",
        affected: 239,
        get_well: 380,
        death: 250,
    },
    {
        name: "Sun",
        affected: 349,
        get_well: 430,
        death: 210,
    },
];

const data1 = [
    {
        name: "Jan",
        affected: 400,
        get_well: 240,
        death: 240,
    },
    {
        name: "Feb",
        affected: 300,
        get_well: 139,
        death: 221,
    },
    {
        name: "Mar",
        affected: 580,
        get_well: 280,
        death: 229,
    },
    {
        name: "App",
        affected: 698,
        get_well: 450,
        death: 320,
    },
    {
        name: "May",
        affected: 489,
        get_well: 280,
        death: 218,
    },
    {
        name: "Jun",
        affected: 389,
        get_well: 210,
        death: 250,
    },
    {
        name: "Jul",
        affected: 449,
        get_well: 330,
        death: 210,
    },
    {
        name: "Aug",
        affected: 349,
        get_well: 430,
        death: 190,
    },
    {
        name: "Sep",
        affected: 349,
        get_well: 430,
        death: 170,
    },
    {
        name: "Oct",
        affected: 349,
        get_well: 430,
        death: 120,
    },
    {
        name: "Nov",
        affected: 249,
        get_well: 130,
        death: 75,
    },
    {
        name: "Dec",
        affected: 179,
        get_well: 125,
        death: 50,
    },
];