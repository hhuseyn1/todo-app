import React from 'react';

export default function Cards({openEditView,openDeleteView}) {
  return (
    <>
      <div className='w-[560px] h-[330px] border border-zinc-300 rounded-[5px] mx-[10px] my-[20px]'>

        <div className='bg-[#E7E7E7] p-[30px] h-[80%]'>
          <h1 className='text-3xl font-bold'>Card title</h1>
          <p className='my-4 text-justify font-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas ratione eos distinctio natus ex odio quod non deleniti, nesciunt reprehenderit reiciendis commodi corporis? Neque, sapiente culpa! Quod officiis aut consequatur! Quis mollitia officiis labore amet vitae voluptas magni, accusantium consequuntur dolores, ducimus sed aliquid obcaecati est tenetur nemo consequatur
          </p>
        </div>

        <div className='flex bg-zinc-300 justify-end h-[20%] items-center'>
          <button
            onClick={()=>{
              openEditView(true)
            }}
            className='bg-yellow-400 py-2 px-5 rounded-[5px] font-bold hover:bg-yellow-500'>
            Edit
          </button>
          <button
            onClick={()=>{
                openDeleteView(true)
              }}
            className='bg-yellow-400 py-2 px-5 rounded-[5px] font-bold mx-2 hover:bg-yellow-500'>
            Delete
          </button>
        </div>

      </div>
              
    </>
  );
}
