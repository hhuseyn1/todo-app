export default function DeleteCard() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='mx-auto bg-slate-100 w-[700px] h-[241px] rounded-[13px]'>
        <div className="flex justify-end">
          <button className='bg-red-700 text-slate-100 w-[30px] h-[30px] rounded-full mt-2 mr-2'>X</button>
        </div>
        <h1 className='font-bold flex justify-center m-2 uppercase text-[30px]'>Delete Card</h1>
        <div className="flex justify-center">
          <p className="text-[20px]">Are you sure you want to delete card "..."?</p>
        </div>
        <div className='flex justify-center text-[20px]'>
          <button className='bg-slate-200 w-[124px] h-[61px] rounded-[15px] m-5'>Close</button>
          <button className='bg-yellow-400 w-[124px] h-[61px] rounded-[15px] m-5'>Delete</button>
        </div>
      </div>
    </div>
  );
}
