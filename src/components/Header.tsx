import React from "react";
import "./Header.css"

type HeaderProps = {
    titre:string
};

export const Header = ({titre}: HeaderProps) => {
    return (
        <div className="header">
            <h1>{titre}</h1>
        </div>
    );
};