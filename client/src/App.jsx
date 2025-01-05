import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './redux/thunks/userThunks'
import Toast from './components/utils/Toast'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import ProtectedRoute, { UserRoute } from './components/auth/Protectedoutes'
import Loader from './components/utils/Loader'
import { getQuiz } from './redux/api/getQuiz'
import ComingSoon from './components/pages/user/ComingSoon'

export default function App () {
  const { user, loading, error } = useSelector(s => s.auth)
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) dispatch(getUser(await user.getIdToken()));
      else dispatch(getUser());
    })
    return () => unsubscribe()
  }, [dispatch]);

  // Quiz  Fetch
  useEffect(() => {
    getQuiz();
  }, []);

  // User Routes
  const UserDashboard = lazy(() => import('./components/pages/user/Userdashboard'));
  const Profile = lazy(() => import('./components/pages/user/Profile'));
  const Practice = lazy(() => import('./components/pages/user/Practice'));
  const UserHome = lazy(() => import('./components/pages/user/Home'));
  const Solution = lazy(() => import('./components/pages/user/Solutions'));
  // Admin Routes
  const AdminDashboard = lazy(() => import('./components/pages/admin/Dashboard'));
  const AdminHome = lazy(() => import('./components/pages/admin/Home'))
  const AdminQuiz = lazy(() => import('./components/pages/admin/Quiz'));
  const EditQuiz = lazy(() => import('./components/pages/admin/EditQuiz'));
  // Shared Routes
  const Login = lazy(() => import('./components/pages/Login'))
  const Signup = lazy(() => import('./components/pages/Signup'))
  // Website Routes
  const Home = lazy(() => import('./components/pages/app/Home'));
  // Layout 
  const Layout = lazy(() => import('./components/layout/Layout'));
  return ( 
    <>
      {loading ? (
        <><Loader/></>
      ) : (
        <Suspense fallback={  <><Loader/></>} >
          <BrowserRouter>
            <Routes>
              <Route element={<UserRoute />}>
                <Route path='/login' element={<Login />} />
                <Route path='/Signup' element={<Signup />} />
              </Route>
              <Route element={<ProtectedRoute requiredRole={'user'} />}>
                <Route path='/user' element={<UserDashboard />}>
                    <Route index element={<UserHome/>} />
                    <Route path='profile' element={<><Profile/></>} />
                    <Route path='settings' element={<><ComingSoon/> </>} />
                    <Route path='analysis' element={<><ComingSoon/></>} />
                    <Route path='practice' element={<><Practice/></>} />
                    <Route path='roadmaps' element={<><ComingSoon/></>} />
                  </Route>
                </Route>
              <Route element={<ProtectedRoute requiredRole={'user'} />} >
                <Route element={<Solution/>} path='/user/solution/:id' />
              </Route>
              <Route element={<ProtectedRoute requiredRole={"admin"} />}>
                <Route path='/admin' element={<AdminDashboard/>}>
                  <Route index element={<><AdminHome/></>} />
                  <Route path='edit/:id' element={<EditQuiz/>}  />
                </Route> 
              </Route>

              <Route path=''  element={<Layout><Home/></Layout>} />
              <Route path='*' element={<Navigate to={'/'} />} />
            </Routes>

            <Toast isOpen={true} message='Please Login to your account' type='warning' />
          </BrowserRouter>
        </Suspense>
      )}
    </>
  )
}
