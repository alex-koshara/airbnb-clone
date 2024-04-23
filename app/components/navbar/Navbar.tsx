'use client';

import { User } from '@prisma/client';

import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import Categories from './Categories';
import useSearchModal from '@/app/hooks/useSearchModal';
import { SafeUser } from '@/app/types';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useRentModal from '@/app/hooks/useRentModal';
import { useEffect, useState } from 'react';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser
}) => {
  const searchModal = useSearchModal();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (searchModal.isOpen || loginModal.isOpen || registerModal.isOpen || rentModal.isOpen) {
      setIsOpenModal(true);
    } else {
      setIsOpenModal(false);
    }
  }, [loginModal.isOpen, registerModal.isOpen, rentModal.isOpen, searchModal.isOpen]);

  return (
    <div
      className={`
        fixed
        w-full
        bg-white
        shadow-sm
        ${isOpenModal ? '-z-1' : 'z-10'}
      `}
    >
      <div
        className='py-4 border-b-[1px]'
      >
        <Container>
          <div
            className='
              flex
              flex-row
              items-center
              justify-between
              gap-3
              md:gap-0
            '
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar