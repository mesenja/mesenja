import React, { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => (
  <footer className="my-8 mx-auto">
    <p className="text-gray-600 text-sm">
      &copy; {new Date().getFullYear()} / Mesenja
    </p>
  </footer>
)
