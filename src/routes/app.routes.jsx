import { Route, Routes } from 'react-router-dom'

import { Details } from '../pages/details'
import { Home } from '../pages/home'
import { NewNote } from '../pages/new-note'
import { Profile } from '../pages/profile'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewNote />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}
