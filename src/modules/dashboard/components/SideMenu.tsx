import { NavLink } from 'react-router-dom';
import {
  DASHBOARD_EDIT_PAGE,
  DASHBOARD_PAGE,
  DASHBOARD_PASSWORD_PAGE,
} from '@modules/dashboard/routes';
import React from 'react';
import { LOGOUT_PAGE } from '@modules/auth/routes';

export const SideMenu = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={DASHBOARD_PAGE}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={DASHBOARD_EDIT_PAGE}>Edit Profile</NavLink>
        </li>
        <li>
          <NavLink to={DASHBOARD_PASSWORD_PAGE}>Edit Password</NavLink>
        </li>
        <li>
          <NavLink to={LOGOUT_PAGE}>Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};
