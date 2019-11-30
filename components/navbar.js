import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <Link href='/'>
        <a>Note</a>
      </Link>
      {' | '}
      <Link href='/reminders'>
        <a>Reminders</a>
      </Link>
      {' | '}
      <Link href='/archive'>
        <a>Archive</a>
      </Link>
      {' | '}
      <Link href='/trash'>
        <a>Trash</a>
      </Link>
      {' | '}
      <Link href='/settings'>
        <a>Settings</a>
      </Link>
      {' | '}
      <Link href='/helpfeedback'>
        <a>Help and Feedback</a>
      </Link>
      {' | '}
      <Link href='/about'>
        <a title='About Page'>About</a>
      </Link>
    </nav>
  );
};
export default NavBar;
