import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import EmpHeader from "../../components/header/EmpHeader";
import { MAinFlexContainer } from "../../assets/styles/globalStyls";
import { DivisionContainer, MapContainer } from "./z-adminStyle";
import Map from "../../components/map/Map"
import packageInfo from "../../store/Data/sriLankaColombo.json";

export default function ViewMap() {
    return (
        <AdminLayout>
            <EmpHeader pageName={"View Map"} />

            <MAinFlexContainer>
                <MapContainer>
                    <Map mapData={packageInfo.features} />
                </MapContainer>
                <DivisionContainer></DivisionContainer>
            </MAinFlexContainer>
        </AdminLayout>
    );
}
