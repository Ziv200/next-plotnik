interface InfoLineCellProps {
  cellKey: string;
  value: string | null;
}

const InfoLineCell = ({ cellKey, value }: InfoLineCellProps) => {
  return (
    <div className='flex flex-col'>
      <div>{cellKey}</div>
      <div className='text-sm text-center'>{value || "-"}</div>
    </div>
  );
};
export default InfoLineCell;
