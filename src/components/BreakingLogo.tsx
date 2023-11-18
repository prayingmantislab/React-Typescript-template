// import stylesheet
interface Props {
  result: string[];
}
export default function BreakingLogo({ result }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span style={{ fontSize: '75px' }}>{result[0]}</span>
      {result[1] && (
        <span
          style={{
            display: 'flex',
            height: '100px',
            backgroundColor: '#0f5135',
            aspectRatio: '1',
            color: '#fff',
            fontSize: '75px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {result[1]}
        </span>
      )}
      <span style={{ fontSize: '75px' }}>{result[2]}</span>
    </div>
  );
}
