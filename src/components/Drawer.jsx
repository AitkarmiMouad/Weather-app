import { ContextApi } from '../context/ContextApi'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { lighten } from "polished";
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Container, IconButton, Box, ListItem, ListItemButton, ListItemText } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";
import closeIcon from '../assets/images/close-icon.svg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FixedSizeList } from 'react-window';


const CustomContainer = styled(Container)`
  ${tw`h-full w-full`}
  background-color: var(--custom-darkblue-100);
  `

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 5.375rem;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2.375rem;
  margin-top: 1rem;
  @media only screen and (min-width: 992px) {
    margin-bottom: 3.625rem;
  }
  .form {
    &__input-group {
      position: relative;
    }
    &__input {
      outline: none;
      padding: 0.875rem 0.9375rem 0.9375rem 3.0625rem;
      width: 100%;
      background-color: transparent;
      color:var(--custom-white);
      border: 1px solid var(--custom-grey-100);
      &::-webkit-search-cancel-button {
        position: relative;
        right: -0.9375rem;
        -webkit-appearance: none;
        cursor: pointer;
        background: url(${(props) => props.closeIcon}) no-repeat;
        background-size: 1.5rem;
        height: 1.5rem;
        width: 1.5rem;
        pointer-events: none;
        opacity: 0;
        transition: opacity 300ms ease-in, right 300ms ease-in-out;
      }
      &:focus {
      border: 1px solid var(--custom-white);
        &::-webkit-search-cancel-button {
          right: -0.5rem;
          opacity: 1;
          pointer-events: all;
        }
        ~ .form__input--icon {
          color: var(--custom-grey-100);
          
        }
      }
      &::placeholder {
        color: var(--custom-grey-300);
      }
      &--icon {
        position: absolute;
        top: 0.75rem;
        left: 0.9375rem;
        font-size: 1.5rem;
        color: var(--custom-grey-300);
        transition: color 280ms ease-in-out;
      }
    }
    &__search {
      display: flex;
      justify-content: center;
      width: 5.375rem;
      padding: 0.875rem 0 0.9375rem;
      background-color: var(--custom-lightblue);
      border: 1px solid transparent;
      font-weight: 600;
      transition: background-color 280ms ease-in-out;
      color:var(--custom-white);
      &:hover {
        background-color: ${lighten(0.05, "#3C47E9")};
      }
    }
  }
`;

const Drawer = () => {

  const { drawerState, setDrawerState, locationList } = useContext(ContextApi);
  const [location, setLocation] = useState();
  const [listSize, setListSize] = useState(1);
  const [inputSearch, setInputSearch] = useState();

  useEffect(() => {
    setLocation(locationList)
  }, [locationList])

  useEffect(() => {
    if (location !== undefined) setListSize(location.length)
  }, [location])

  const handleSearch = (e) => {
    setLocation(locationList.filter(item => (item.toLowerCase()).startsWith(e.target.value.toLowerCase())))
    if (e.target.value === "") {
      setLocation(locationList)
    }
  }

  return (

    <SwipeableDrawer
      PaperProps={{ style: { position: 'absolute' }, sx: { width: '100%' } }}
      BackdropProps={{ style: { position: 'absolute' } }}
      ModalProps={{
        container: document.getElementById('drawer-container'),
        style: { position: 'absolute' }
      }}
      variant="temporary"
      open={drawerState}
      onClose={() => setDrawerState(false)}
      onOpen={() => setDrawerState(true)}
    >
      <CustomContainer >
        <div className='flex justify-end'>
          <IconButton aria-label="close" onClick={() => setDrawerState(false)} >
            <CloseIcon style={{ color: 'var(--custom-white)' }} />
          </IconButton>
        </div>

        <SearchForm closeIcon={closeIcon}>
          <div className="form__input-group">
            <input
              type="search"
              placeholder="search location"
              className="form__input"
              onChange={(e) => { setInputSearch(e.target.value); handleSearch(e); }}
              value={inputSearch}
            />

            <IconContext.Provider value={{ className: "form__input--icon" }} >
              <MdSearch style={{ top: '1rem' }} />
            </IconContext.Provider>
          </div>

          <button type="submit" className="form__search">
            Search
          </button>
        </SearchForm>

        <Box sx={{ width: '100%', height: 400, bgcolor: 'transparent' }} className='BoxList'>
          <FixedSizeList
            itemData={location}
            height={300}
            width={300}
            itemSize={50}
            itemCount={listSize}
            overscanCount={50}
            className='ListBox'
          >
            {renderRow}
          </FixedSizeList>
        </Box>

      </CustomContainer>
    </SwipeableDrawer>
  )
}

function renderRow(props) {
  const { data, index, style } = props;

  const item = data[index];

  return (
    <ListItem style={style} className='listItem' key={index} component="div" disablePadding secondaryAction={
      <IconButton edge="end" aria-label="arrow" >
        <ArrowForwardIosIcon style={{ fontSize: '1rem' }} className='opacity-0 arrowIcon' />
      </IconButton>
    }>
      <ListItemButton>
        <ListItemText style={{ color: 'var(--custom-white)' }} primary={`${item}`} />
      </ListItemButton>
    </ListItem>
  )
}

export default Drawer
