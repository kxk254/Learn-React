import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : "Default Title"}</h1>;
}

export default function HomePage() {
}