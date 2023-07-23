import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import EmpHeader from "../../components/header/EmpHeader";
import { DivisionContainer, MapContainer, MapMAinContainer } from "./z-adminStyle";
import Map from "../../components/map/Map"
import packageInfo from "../../store/Data/sriLanka.json";

export default function ViewMap() {
    return (
        <AdminLayout>
            <EmpHeader pageName={"View Map"} />

            <MapMAinContainer>
                <MapContainer>
                    <Map mapData={packageInfo.features} />
                </MapContainer>
                <DivisionContainer></DivisionContainer>
            </MapMAinContainer>
        </AdminLayout>
    );
}
