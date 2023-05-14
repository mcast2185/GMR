"use client";

import React from "react";
import Link from 'next/link';


function ClientSideRoute({
  children, 
  route
}: {
  children: React.ReactNode, 
  route: string
}) {
  return (
    <Link rel="preload" href={route}>{children}</Link>
  );
};


export default ClientSideRoute;