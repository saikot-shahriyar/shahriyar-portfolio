"use client";

import React, { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function CurrentYear() {
  const year = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  return <>{year}</>;
}

