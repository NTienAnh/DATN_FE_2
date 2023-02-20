import MuiTypography from '../DataDisplay/MuiTypography';

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
      <div
        style={{
          gap: '20px',
          display: 'flex',
          justifyItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <MuiTypography name='MUI' />
        <MuiTypography name='Element 2' />
      </div>
    </div>
  );
};

export default Hello;
