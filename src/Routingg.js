import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddRecipe from './AddRecipe'
import Home from './Home'
import ListOfRecipes from './ListOfRecipes'
import MainPage from './MainPage'
import MainPage2 from './MainPage2'
import ProfilePage from './ProfilePage'
import SavedPages from './SavedPages'
import SearchPage from './SearchPage'
import SecondarySearchPage from './SecondarySearchPage'

function Routingg() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/recipe/:cat' element={<ListOfRecipes/>}/>
            <Route path='/exploremore/:cat' element={<MainPage2/>}/>
            <Route path='/saved' element={<SavedPages/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/addrecipe' element={<AddRecipe/>}/>
            <Route path='/search/:text' element={<SearchPage/>}/>
            <Route path='/item/:name' element={<MainPage/>}/>
            <Route path='/searchpage' element={<SecondarySearchPage/>}/>
        </Routes>
    </div>
  )
}

export default Routingg