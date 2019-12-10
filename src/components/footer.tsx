import React, { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => (
  <footer className="m-8">
    <p className="text-gray-600 text-sm">
      &copy; {new Date().getFullYear()} / Mesenja
    </p>
  </footer>
)
