import { Button } from '@mui/material';
import logo from '~/logo.svg';
import Test from '../Test';

const Hello = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '50px',
      }}
    >
      <img src={logo} alt='Logo' style={{ height: '150px' }} />
      <Test />
      <Button>sss</Button>
    </div>
  );
};

export default Hello;
