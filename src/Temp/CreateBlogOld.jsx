import { useState } from 'react';

function CreateBlog({ handleCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <>
    <div className="">
      <label htmlFor="">Title</label>
      <input type="text" onChange={ev => setTitle(ev.target.value)} value={title} className="border"/>
    </div>
    <div className="">
      <label htmlFor="">Description</label>
      <textarea onChange={ev => setDescription(ev.target.value)} value={description} className="border"/>
    </div>
    <button onClick={() => {
      handleCreate(title, description);
    }}>
      Buat
    </button>
    </>
  );
}

export default CreateBlog;