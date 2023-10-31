import React, { createContext, useState, useEffect } from 'react'

import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import Books from './Books'
import Arthematic from '../pages/Arithmatic'
import ModalBox from '../pages/ModalBox'
import LoadNews from './LoadNews'
import TodoList from './TodoList'
import MyProfile from './MyProfile'
import GetNews from './GetNews'
import StudentsList from '../props/StudentsList'
import TodoListProps from '../props/TodoListProps'
import TodoListEditable from './TodoListEditable'
import TodoListMultiField from '../props/TodoListMultiField'
import DOM from '../props/DOM'
import Nested from '../advanced/Nested'



import { onAuthStateChanged, onIdTokenChanged } from 'firebase/auth'

import OTPLogin from '../fb/OTPLogin'
import { auth } from '../fb/firebase'








// To use the createContext hook.
export const UserContext = createContext('defaultvalue')
export const ThemeContext = createContext('')

export default function MainMenu() {
    const [user, setUser] = useState('Ajay')
    const [theme, setTheme] = useState('light')


    useEffect(() => {
        const unsubscribeAuthState = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        const unsubscribeIdToken = onIdTokenChanged(auth, (user) => {
            setUser(user);
        });
        return () => {
            unsubscribeAuthState();
            unsubscribeIdToken();
        };
    }, [auth]);

    return (
        <div>
            <UserContext.Provider value={{ user, setUser, age: 25 }} >  {/* Wrap up all the components within the usercontext in order to acess in all pages */}

                <ThemeContext.Provider value={{ theme, setTheme }}>

                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<MenuItems />}>
                                <Route index element={<HomePage />} />
                                <Route path='about' element={<AboutPage />} />
                                <Route path='books' element={<Books />} />
                                <Route path='calc' element={<Arthematic />} />
                                <Route path='modal' element={<ModalBox />} />
                                <Route path='loadnews' element={<LoadNews />} />
                                <Route path='todolist' element={<TodoList />} />
                                <Route path='myprofile/:userid' element={<MyProfile />} />
                                <Route path='getnews' element={<GetNews />} />
                                <Route path='studentslist/:id' element={<StudentsList />} />
                                <Route path='studentslist/:id/:name' element={<StudentsList />} />
                                <Route path='todolistprops' element={<TodoListProps />} />
                                <Route path="TodoListEditable" element={<TodoListEditable />} />
                                <Route path="todolistmultifield" element={<TodoListMultiField />} />
                                <Route path="dom" element={<DOM />} />
                                <Route path="nested" element={<Nested />} />

                                <Route path="account" element={<OTPLogin user={user} setUser={setUser} />} />

                            </Route>
                        </Routes>
                    </BrowserRouter>

                </ThemeContext.Provider>

            </UserContext.Provider>

        </div>
    )
}







//without using the create context

/* export default function MainMenu() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MenuItems />}>
                        <Route index element={<HomePage />} />
                        <Route path='about' element={<AboutPage />} />
                        <Route path='books' element={<Books />} />
                        <Route path='calc' element={<Arthematic />} />
                        <Route path='modal' element={<ModalBox />} />
                        <Route path='loadnews' element={<LoadNews />} />
                        <Route path='todolist' element={<TodoList />} />
                        <Route path='myprofile' element={<MyProfile />} />
                        <Route path='getnews' element={<GetNews />} />
                        <Route path='studentslist' element={<StudentsList />} />
                        <Route path='todolistprops' element={<TodoListProps />} />
                        <Route path="TodoListEditable" element={<TodoListEditable />} />
                        <Route path="todolistmultifield" element={<TodoListMultiField />} />
                        <Route path="dom" element={<DOM />} />
                        <Route path="nested" element={<Nested />} />



                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
} */


function MenuItems() {
    return (
        <>
            <Menu>
                <Menu.Item>
                    <Link to='/'>Home</Link>
                </Menu.Item>

                <Menu.Item as={Link} to='/about'>
                    About
                </Menu.Item>

                <Menu.Item as={Link} to='/books'>
                    Books
                </Menu.Item>

                <Menu.Item as={Link} to='/calc'>
                    Arithmatic
                </Menu.Item>

                <Menu.Item as={Link} to='/modal'>
                    Modal
                </Menu.Item>

                <Menu.Item as={Link} to='/loadnews'>
                    Load News
                </Menu.Item>

                <Menu.Item as={Link} to='/todolist'>
                    Todo List
                </Menu.Item>

                <Menu.Item as={Link} to='/myprofile'>
                    My Profile
                </Menu.Item>


                <Menu.Item as={Link} to='/getnews'>
                    Get News
                </Menu.Item>

                <Menu.Item as={Link} to='/studentslist'>
                    students list
                </Menu.Item>

                <Menu.Item as={Link} to='/todolistprops'>
                    todo list props
                </Menu.Item>

                <Menu.Item as={Link} to='/TodoListEditable'>
                    TodoListEditable
                </Menu.Item>

                <Menu.Item as={Link} to='/todolistmultifield'>
                    Multilist Edit
                </Menu.Item>

                <Menu.Item as={Link} to='/dom'>
                    DOM
                </Menu.Item>

                <Menu.Item as={Link} to='/nested'>
                    Nested
                </Menu.Item>

                <Menu.Item as={Link} to='/account'>
                    Account
                </Menu.Item>


            </Menu>
            <Outlet />
        </>
    )
}