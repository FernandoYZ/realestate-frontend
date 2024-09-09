import React from "react";

export interface Module {
    title: string;
    items: string[];
    icon?: React.ElementType;
}

export interface User {
    fullname: string;
    fallback: string;
    email: string;
    ocupation: string;
}