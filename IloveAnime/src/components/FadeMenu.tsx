import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Bars3Icon } from "@heroicons/react/24/outline"
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='flex items-center'>
        <p className="text-white uppercase font-bold text-lg">
            Menu
        </p>

      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Bars3Icon className="h-8 w-8 text-white" />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
            <NavLink
                to="/"
                className={({isActive}) => isActive ? 'border-b-2 border-b-black font-bold' : 'font-bold'}
            >Inicio</NavLink>
        </MenuItem>

        <MenuItem onClick={handleClose}>
        <NavLink
                to="/favorites"
                className={({isActive}) => isActive ? 'border-b-2 border-b-black font-bold' : 'font-bold'}
        >Favoritos</NavLink>
        </MenuItem>

        <MenuItem onClick={handleClose}>
        <NavLink
                to="/watchlater"
                className={({isActive}) => isActive ? 'border-b-2 border-b-black font-bold' : 'font-bold'}
        >Ver luego</NavLink>
        </MenuItem>

      </Menu>
    </div>
  );
}