import { Route, Routes } from "react-router-dom";
import {
  ADMIN_ADVERTISING_PAGE,
  ADMIN_AUTH_PAGE,
  ADMIN_CONTACTS_PAGE,
  ADMIN_EDIT_PAGE,
  ADMIN_INSTITUTION_PAGE,
  ADMIN_PHOTO_PAGE,
  ADMIN_POSTER_PAGE,
  ADMIN_VIDEO_PAGE,
  MAIN_PAGE,
  PHOTO_PAGE,
} from "../consts/consts";

import AdminAuthPage from "../pages/AdminAuthPage/AdminAuthPage"
import AdminPhotoPage from "../pages/AdminPhotoPage/AdminPhotoPage";
import PhotoPage from "../pages/PhotoPage/PhotoPage";
import {useId} from "react";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      path: ADMIN_AUTH_PAGE,
      Component: <AdminAuthPage />,
      id: useId(),
    },
    {
      path: ADMIN_PHOTO_PAGE,
      Component: <AdminPhotoPage />,
      id: useId(),
    },
    {
      path: PHOTO_PAGE,
      Component: <PhotoPage />,
      id: useId(),
    }
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.path} element={item.Component} key={item.id} />
        ))}
      </Routes>
    </>
  )
}

export default MainRoutes;
